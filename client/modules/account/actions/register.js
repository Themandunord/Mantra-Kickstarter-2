export default {
    register({Meteor, LocalState, Accounts}, options) {
        const {email, password} = options;
        if (!email || !password) {
            return LocalState.set('SIGN_UP_ERROR', 'Email and password are required');
        }

        LocalState.set('REGISTER_ERROR', null);

        Accounts.createUser({email, password}, (error) => {
            if (error) {
                if(error.error === 'email-not-verified'){
                    Bert.alert('Please check your email to verify your email :)')
                }
                else{
                    Bert.alert(T9n.get('error.accounts.' + error.reason), 'danger');
                    return LocalState.set('REGISTER_ERROR', error.reason);
                }
            }
        });
    }
};