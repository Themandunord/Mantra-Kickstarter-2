import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom';
import config from '/lib/configs/ui';

const {Sider} = Layout;
const {SubMenu} = Menu;

class SiderMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let siderProps = {
                className:'sider',
                trigger: null,
                collapsible: true,
                breakpoint: "md",
                width: 256,
                collapsed: this.props.collapsed
        };
        if(config.responsiveSider){
            siderProps.collapsedWidth = 0;
        }
        return (
            <Sider
                {...siderProps}
            >
                <div className='logo'>
                    <Link to="/app">
                        <img src='/img/logo.svg' alt="logo" />
                        <h1>Mantra Kickstarter</h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    style={{ padding: '16px 0', width: '100%' }}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file"/>
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SiderMenu;
