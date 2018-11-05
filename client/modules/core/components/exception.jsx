import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'antd/lib/button';

const config = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: 'Oops, you don\'t have the persmission to see this page!',
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: 'Oops, this page is not found!',
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: 'Oops, an error occured!',
  },
};

class Exception extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, desc, backText, actions} = this.props;
    const pageType = "404";

    return (
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{ backgroundImage: `url(${config[pageType].img})` }}
          />
        </div>
        <div className="content">
          <h1>{config[pageType].title}</h1>
          <div className="desc">{config[pageType].desc}</div>
          <div className="actions">
            <Link to='/app'><Button type="primary">Back to Home</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Exception;
