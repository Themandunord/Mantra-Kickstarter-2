import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import history from '/client/configs/history';
// Lang
import LocaleProvider from 'antd/lib/locale-provider';
import {antd} from '/client/configs/i18n.config';

/* Layouts */
import BasicLayout from '/client/modules/layout/containers/basic_layout';
import UserLayout from '/client/modules/layout/containers/user_layout';

/* Containers */
import Home from '/client/modules/core/components/home.jsx';

export default function (injectDeps, {LocalState}) {
    const BasicLayoutCtx = injectDeps(BasicLayout);
    const UserLayoutCtx = injectDeps(UserLayout);

    const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    )

    ReactDOM.render(
        <Router history={history}>
            <LocaleProvider locale={antd()}>
                <Switch>

                    <AppRoute exact path='/user' layout={UserLayoutCtx} component={Home}/>
                    <AppRoute exact path='/app' layout={BasicLayoutCtx} component={Home}/>
                    <Redirect from='/' to='/user'/>
                </Switch>
            </LocaleProvider>
        </Router>
        ,
        getRootNode('root')
    );
}

function getRootNode(rootId) {
    const rootNode = document.getElementById(rootId);

    if (rootNode) {
        return rootNode;
    }

    const rootNodeHtml = '<div id="' + rootId + '"></div>';
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', rootNodeHtml);

    return document.getElementById(rootId);
}