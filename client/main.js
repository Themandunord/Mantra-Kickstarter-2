import {createApp} from "mantra-core";
import config from "./configs";
import initContext from "./configs/context";
import coreModule from "./modules/core";
import "antd/dist/antd.css";

/* Import Antd CSS */

// Configure the client
config();

// modules

// init context
const context = initContext();

// create app
const app = createApp(context);
// load modules
app.loadModule(coreModule);
app.init();
