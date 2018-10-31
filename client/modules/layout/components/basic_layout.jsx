import React from 'react';
import autoBind from 'react-autobind';
import Layout from 'antd/lib/layout';
import SiderMenu from '/client/modules/core/components/sider_menu';
import GlobalHeader from '/client/modules/core/containers/global_header';
import EnsureUser from '/client/modules/auth/containers/ensure_user';

const {Content} = Layout;

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };

        autoBind(this)
    }

    onToggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <EnsureUser>
                <Layout>
                    <SiderMenu
                        collapsed={this.state.collapsed}/>
                    <Layout>
                        <GlobalHeader
                            collapsed={this.state.collapsed}
                            onCollapse={this.onToggleCollapse}
                        />
                        <Content style={{padding: 24, background: '#fff', minHeight: 280}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </EnsureUser>
        );
    }
}

export default BasicLayout;
