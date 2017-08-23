import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import {BrowserRouter, Route, Link} from 'react-router-dom';

/* Layouts */
import MainLayout from '/client/modules/core/components/main_layout.jsx';

/* Containers */
import Home from '/client/modules/core/components/home.jsx';


export default function (injectDeps, {LocalState}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
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