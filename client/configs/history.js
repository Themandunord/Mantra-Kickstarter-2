import createBrowserHistory from 'history/createBrowserHistory'

export default createBrowserHistory({
    basename: '',             // The base URL of the app (see below)
    forceRefresh: false,      // Set true to force full page refreshes
    keyLength: 6,             // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    //getUserConfirmation: (message, callback) => callback(window.confirm(message))
});