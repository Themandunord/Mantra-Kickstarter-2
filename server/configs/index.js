import browserPolicy from './browser_policy';
import email from './email';
import mongo from './mongo-indexes';
import initialData from './initial-data';

export default function () {
  browserPolicy();
  email();
  mongo();
  initialData();
}