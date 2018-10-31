// Add initial data here...

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import constants from '/lib/constants';

export default function () {
  // Roles
  if (Roles.getAllRoles().fetch().length === 0) {
    const roles = [constants.ROLES.ROOT, constants.ROLES.ADMIN, constants.ROLES.USER];
    roles.forEach((role) => {
      Roles.createRole(role);
    });
  }

  // Users
  const users = [
    { username: 'root', email: 'root@example.com', password: 'root', roles: [constants.ROLES.ROOT] },
    { username: 'admin', email: 'admin@example.com', password: 'admin', roles: [constants.ROLES.ADMIN] },
    { username: 'user', email: 'user@example.com', password: 'user', roles: [constants.ROLES.USER] },
  ];

  users.forEach(({ username, email, password, roles }) => {
    const userExists = Accounts.findUserByEmail(email);
    if (!userExists) {
      const userId = Accounts.createUser({ username, email, password });
      Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}