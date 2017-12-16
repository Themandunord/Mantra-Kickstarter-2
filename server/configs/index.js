import browserPolicy from './browser_policy';
import email from './email';
import mongo from './mongo-indexes';

export default function () {
  browserPolicy();
  email();
  mongo();
}