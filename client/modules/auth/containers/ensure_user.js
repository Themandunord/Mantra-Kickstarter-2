import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EnsureUser from '../components/ensure_user.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, history} = context();

  if(!Meteor.userId()){
    return history.push('/')
  }else {
    return onData(null, {});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EnsureUser);
