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
import constants from '/lib/constants';

/* Roles */
import EnsureRole from '/client/modules/auth/containers/ensure_role';

/* Layouts */
import BasicLayout from '/client/modules/layout/containers/basic_layout';
import UserLayout from '/client/modules/layout/containers/user_layout';

/* Containers */
import Home from '/client/modules/core/components/home.jsx';

/* Container Accounts */
import Login from '/client/modules/account/containers/login';
import Register from '/client/modules/account/containers/register';

export default function (injectDeps, {LocalState}) {
    const BasicLayoutCtx = injectDeps(BasicLayout);
    const UserLayoutCtx = injectDeps(UserLayout);

    const AppRoute = ({ c: Component, layout: Layout, ...rest }) => (
        <Route exact {...rest} render={(props) => {
            const roles = rest.roles || null;

            const layout = (
                <BasicLayoutCtx>
                    <EnsureRole roles={roles}>
                        <Component {...props} />
                    </EnsureRole>
                </BasicLayoutCtx>
            );
            return layout;
        }}/>
    );

    const GuestRoute = ({ c: Component, ...rest }) => (
        <Route exact {...rest} render={(props) => {
            const layout = <UserLayoutCtx><Component {...props} /></UserLayoutCtx>;
            return layout;
        }}/>
    );

    ReactDOM.render(
        <Router history={history}>
            <LocaleProvider locale={antd()}>
                <Switch>
                    <GuestRoute path='/user/login' c={Login}/>
                    <GuestRoute path='/user/register' c={Register}/>

                    <AppRoute roles={[constants.ROLES.ADMIN,constants.ROLES.ROOT]} path='/app' c={Home}/>

                    <Redirect from='/' to='/user/login'/>
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