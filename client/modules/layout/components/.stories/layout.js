import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Layout from '../layout.jsx';

storiesOf('core.Layout', module)
  .add('default view', () => {
    return (
      <Layout />
    );
  })
