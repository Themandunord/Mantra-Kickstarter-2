import React from "react";
import i18n from 'meteor/universe:i18n';
import DatePicker from "antd/lib/date-picker";
import Card, {Meta} from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
        setTimeout(() => this.setState({loading:false}), 2000);
    }

    render() {
        return (
            <div>
                <h1>Mantra</h1>
                <p>
                    Welcome to Mantra 0.4.2.
                </p>
                <ul>
                    <li>
                        Read <a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
                    </li>
                    <li>
                        Learn <a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
                    </li>
                </ul>
    
                <p>{i18n.__('title')}</p>
    
                <DatePicker />
    
                <Card style={{ width: 300, marginTop: 16 }} loading={this.state.loading}>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        );
    } 
}
