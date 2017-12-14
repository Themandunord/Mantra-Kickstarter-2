import {createApp} from 'mantra-core';
import config from './configs';
import initContext from './configs/context';
import coreModule from './modules/core';
import layoutModule from './modules/layout';


// Replace Underscore with lodash
_ = lodash;

// Import Antd CSS
// import "antd/dist/antd.css";

// Configure the client
config();

// modules

// init context
const context = initContext();

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
