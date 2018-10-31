export default {
    logIn({ Meteor, LocalState, history }, email, password) {
      if (!email || !password) {
        return LocalState.set('LOGIN_ERROR', 'Email & password are required');
      }
  
      LocalState.set('LOGIN_ERROR', null);
  
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          Bert.alert(T9n.get('error.accounts.' + error.reason), 'danger');
          debugger;
          return LocalState.set('LOGIN_ERROR', error.reason);
        }
        Bert.alert('Vous êtes connecté :)');
        history.push('/app');
      });
    }
  };