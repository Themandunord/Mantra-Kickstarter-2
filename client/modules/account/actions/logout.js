export default {
    logout({Meteor, history}){
        Meteor.logout();
        history.push('/')
    },
};