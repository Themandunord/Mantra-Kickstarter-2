import React from 'react';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import Layout from 'antd/lib/layout';

import faker from 'faker';

const {Header} = Layout;

// const avatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
const avatar = faker.image.avatar();

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = (
            <Menu className='menu' selectedKeys={[]}>
                <Menu.Item disabled><Icon type="user"/>Profil</Menu.Item>
                <Menu.Item disabled><Icon type="setting"/>Paramètres</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout" onClick={this.props.logout}><Icon type="logout"/>Déconnexion</Menu.Item>
            </Menu>
        );

        const {isMobile} = this.props;

        return (
            <div className='global_header'>
                <Header className='header' style={{ 
                        position: 'fixed', 
                        zIndex: 10,
                        width: isMobile ? '100%' : 'calc(100% - ' + (this.props.collapsed ? 80 : 256) + 'px)',
                        transition: 'width .2s'
                    }}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.onCollapse}
                    />
                    <div className='right'>
                        <Dropdown overlay={menu}>
                              <span className='action account'>
                                <Avatar size="small" className='avatar'
                                        src={avatar}/>
                                  {this.props.user.email}
                              </span>
                        </Dropdown>
                    </div>
                </Header>
            </div>
        );
    }
}

export default GlobalHeader;
