import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import history from './history';

export default function () {
    return {
        Meteor,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
        Accounts,
        Roles,
        history
    };
}
