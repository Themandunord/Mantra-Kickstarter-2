import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Lang
import LocaleProvider from 'antd/lib/locale-provider';
import {antd} from '/client/configs/i18n.config';

/* Layouts */
import Layout from '/client/modules/core/containers/layout';

/* Containers */
import Home from '/client/modules/core/components/home.jsx';


export default function (injectDeps, {LocalState}) {
    const MainLayoutCtx = injectDeps(Layout);

    ReactDOM.render(
        <BrowserRouter>
            <LocaleProvider locale={antd()}>
                <MainLayoutCtx>
                    <Route exact path="/" component={Home}/>
                </MainLayoutCtx>
            </LocaleProvider>
        </BrowserRouter >
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