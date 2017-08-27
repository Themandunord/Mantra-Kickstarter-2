import bert from './bert.config';
import head from './head.config';
import { init } from './i18n.config';

export default function () {
  init();
  bert();
  head();
}
