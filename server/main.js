import publications from './publications';
import methods from './methods';
import configs from './configs';
import _Logger from './libs/logger';

// Add a namespace for the Logger Lib
Logger = _Logger;

// Replace Undescore with lodash
_ = lodash;

configs();
publications();
methods();

Logger.success('Server is started');

// Inject Loader's html before script was loaded
if (Meteor.isServer) {
  Inject.rawHead('loader', Assets.getText('loader/square_loader.html'));
}
