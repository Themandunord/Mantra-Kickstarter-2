import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Security from '/lib/helpers/security';
import { Roles } from 'meteor/alanning:roles';

import EnsureRole from '../components/ensure_role.jsx';

export const composer = ({context, roles}, onData) => {
  const {Meteor, history} = context();

  if(!roles){
    return onData(null, {});
  }

  if(Meteor.user() && Roles.subscription.ready()){
    const hasRole = Security.currentUserHasRole(roles);
    if(!hasRole){
      return history.push('/login')
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
