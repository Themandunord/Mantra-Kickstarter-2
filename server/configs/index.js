import browserPolicy from './browser-policy';
import email from './email';
import mongoIndexes from './mongo-indexes';
import initialData from './initial-data';
import accounts from './accounts';
import fakeData from './fake-data'

export default function () {
  browserPolicy();
  email();
  mongoIndexes();
  accounts();
  initialData();
  fakeData();
}