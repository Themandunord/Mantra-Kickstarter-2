import {createApp} from 'mantra-core';
import initContext from './configs/context';

/* Import Antd CSS */
import 'antd/dist/antd.css';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
// load modules
app.loadModule(coreModule);
app.init();
