import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import GlobalHeader from '../components/global_header.jsx';
import {authComposer} from '../../../configs/composer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  logout: actions.logout.logout,
  context: () => context
});

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GlobalHeader);
