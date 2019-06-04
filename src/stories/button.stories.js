import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

// storiesOf('Skincare', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Primary Button', () => <Button onClick={action('clicked')}>Primary Button</Button>)
  .add('Secondary Button', () => (
    <Button onClick={action('clicked')}>
      <span aria-label="secondard-button">
        Secondary Button
      </span>
    </Button>
  ));
