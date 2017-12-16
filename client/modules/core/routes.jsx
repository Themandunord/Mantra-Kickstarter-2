import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import history from '/client/configs/history';
// Lang
import LocaleProvider from 'antd/lib/locale-provider';
import {antd} from '/client/configs/i18n.config';

/* Layouts */
import BasicLayout from '/client/modules/layout/containers/basic_layout';

/* Containers */
import Home from '/client/modules/core/components/home.jsx';

export default function (injectDeps, {LocalState}) {
    const MainLayoutCtx = injectDeps(BasicLayout);

    ReactDOM.render(
        <Router history={history}>
            <LocaleProvider locale={antd()}>
                <MainLayoutCtx>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </MainLayoutCtx>
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