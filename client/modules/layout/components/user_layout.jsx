import React from 'react';
import autoBind from 'react-autobind';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom';

import GlobalFooter from '/client/modules/core/components/global_footer';

const links = [{
    title: 'Link A',
    href: '',
}, {
    title: 'Link B',
    href: '',
}, {
    title: 'Link C',
    href: '',
}];

const copyright = <div>Copyright <Icon type="copyright" /> 2017 Themandunord</div>;

class UserLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        autoBind(this)
    }

    render() {
        return (
            <Layout className='user_layout'>
                <div className='container'>
                    <div className='top'>
                        <div className='header'>
                            <Link to="/">
                                <img alt="logo" className='logo' src='/img/logo.svg'/>
                                <span className='title'>Mantra Kickstarter</span>
                            </Link>
                        </div>
                        <div className='desc'>Meteor Mantra + React + Ant Design boilerplate</div>
                        {this.props.children}
                    </div>
                    <GlobalFooter className='footer' links={links} copyright={copyright} />
                </div>
            </Layout>
        );
    }
}

export default UserLayout;
