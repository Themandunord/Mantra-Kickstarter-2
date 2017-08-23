import { configure, setAddon, addDecorator } from '@storybook/react';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  // require as many as stories you need.
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
