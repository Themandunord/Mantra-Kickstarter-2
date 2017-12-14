import React from 'react';
import AntLayout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import styles from '../styles/layout.less';


const {Header, Content, Sider} = AntLayout;
const {SubMenu} = Menu;

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const menu = (
            <Menu className={styles.menu} selectedKeys={[]}>
                <Menu.Item disabled><Icon type="user"/>个人中心</Menu.Item>
                <Menu.Item disabled><Icon type="setting"/>设置</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout"><Icon type="logout"/>退出登录</Menu.Item>
            </Menu>
        );


        return (
            <AntLayout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
                <AntLayout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <div className={styles.right}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />

                            <Dropdown overlay={menu}>
                              <span className={`${styles.action} ${styles.account}`}>
                                <Avatar size="small" className={styles.avatar} src={''}/>
                                  Rémy
                              </span>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {this.props.children}
                    </Content>
                </AntLayout>
            </AntLayout>
        );
    }
}

export default Layout;
