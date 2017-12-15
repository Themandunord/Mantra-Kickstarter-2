import React from 'react';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Avatar from 'antd/lib/avatar';
import Icon from 'antd/lib/icon';
import Layout from 'antd/lib/layout';

import styles from '../styles/global_header.less';

const {Header} = Layout

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = (
            <Menu className={styles.menu} selectedKeys={[]}>
                <Menu.Item disabled><Icon type="user"/>Profil</Menu.Item>
                <Menu.Item disabled><Icon type="setting"/>Paramètres</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout"><Icon type="logout"/>Déconnexion</Menu.Item>
            </Menu>
        );

        return (
            <Header style={{background: '#fff', padding: 0}}>
                <div className={styles.right}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.onCollapse}
                    />

                    <Dropdown overlay={menu}>
                              <span className={`${styles.action} ${styles.account}`}>
                                <Avatar size="small" className={styles.avatar} src={''}/>
                                  Rémy
                              </span>
                    </Dropdown>
                </div>
            </Header>
        );
    }
}

export default GlobalHeader;
