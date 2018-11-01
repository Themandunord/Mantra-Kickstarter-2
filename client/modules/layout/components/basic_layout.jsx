import React from 'react';
import autoBind from 'react-autobind';
import Layout from 'antd/lib/layout';
import SiderMenu from '/client/modules/core/components/sider_menu';
import GlobalHeader from '/client/modules/core/containers/global_header';
import EnsureUser from '/client/modules/auth/containers/ensure_user';
import { enquireScreen, unenquireScreen } from 'enquire-js';

const {Content} = Layout;

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            isMobile: false
        };

        autoBind(this)
    }

    componentDidMount(){
        this.enquireHandler = enquireScreen(mobile => {
            const { isMobile } = this.state;
            if (isMobile !== mobile) {
              this.setState({
                isMobile: mobile,
              });
            }
          });
    }

    componentWillUnmount(){
        unenquireScreen(this.enquireHandler);
    }

    onToggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <EnsureUser>
                <Layout style={{height:"100vh"}}>
                    <SiderMenu
                        isMobile={this.state.isMobile}
                        collapsed={this.state.collapsed}
                        onCollapse={this.onToggleCollapse}
                    />
                    <Layout>
                        <GlobalHeader
                            isMobile={this.state.isMobile}
                            collapsed={this.state.collapsed}
                            onCollapse={this.onToggleCollapse}
                        />
                        <Content style={{padding: 24, background: '#fff', minHeight: 'initial', marginTop: 64}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </EnsureUser>
        );
    }
}

export default BasicLayout;
