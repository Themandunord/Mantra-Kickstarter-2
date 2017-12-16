import publications from './publications';
import methods from './methods';
import configs from './configs';
import Logger from './libs/logger';

// Replace Undescore with lodash
_ = lodash;

Logger.info('Load configs');
configs();
Logger.info('Load publication');
publications();
Logger.info('Load methods');
methods();

Logger.success('Server is started');

// Inject Loader's html before script was loaded
if (Meteor.isServer) {
  Inject.rawHead('loader', Assets.getText('loader/square_loader.html'));
}
