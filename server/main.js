import publications from './publications';
import methods from './methods';

// Replace Undescore with lodash
_ = lodash;

publications();
methods();

// Inject Loader's html before script was loaded
if (Meteor.isServer) {
    Inject.rawHead("loader", Assets.getText('loader/loader.html'));
}