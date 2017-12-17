import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
    const {Meteor, LocalState} = context();
    const error = LocalState.get('LOGIN_ERROR');

    onData(null, {error});
};

export const depsMapper = (context, actions) => ({
    context: () => context,
    logIn: actions.login.logIn
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Login);
