import {createApp} from 'mantra-core';
import { combineReducers } from 'redux'

import config from './configs';
import initContext from './configs/context';

import coreModule from './modules/core';
import layoutModule from './modules/layout';


const coreReducers = coreModule.reducer;
const layoutReducers = layoutModule.reducer;

// Combine Reducers
const reducer = combineReducers({
    ...coreReducers,
    ...layoutReducers
});

// Replace Underscore with lodash
_ = lodash;


// Configure the client
config();

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);
// load modules
app.loadModule(coreModule);
app.loadModule(layoutModule);

app.init();


// Remove the loading spinner when the user have loaded all the scripts
if (Meteor.isClient) {
  Meteor.startup(function () {
    setTimeout(function () {
      $('#inject-loader-wrapper').fadeOut(200, function () { $(this).remove(); });
    }, 500);
  });
}
