import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePage from './HomePage';

storiesOf('HomePage', module)
    .add('Default', () => (
      <HomePage />
    ));