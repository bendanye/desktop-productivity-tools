import React from 'react';
import { storiesOf } from '@storybook/react';

import TransposePage from './TransposePage';

storiesOf('TransposePage', module)
    .add('Default', () => (
      <TransposePage />
    ));