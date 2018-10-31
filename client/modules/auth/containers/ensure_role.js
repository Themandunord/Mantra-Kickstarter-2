import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Security from '/lib/helpers/security';

import EnsureRole from '../components/ensure_role.jsx';

export const composer = ({context, roles}, onData) => {
  const {Meteor, history} = context();

  if(!roles){
    return onData(null, {});
  }

  const hasRole = Security.currentUserHasRole(roles);

  if(Meteor.user()){
    if(!hasRole){
      return history.push('/')
    }
    onData(null, {});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EnsureRole);
