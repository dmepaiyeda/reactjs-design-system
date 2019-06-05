import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from "../../src/theme/theme";
import { ThemeProvider } from 'styled-components';
import Button from "./button";

// storiesOf('Skincare', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Outlined Button', () => 
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Outlined Button</Button> 
    </ThemeProvider>
    )

  .add('Gradient Button', () => (
    <Button onClick={action('clicked')}>
      <span aria-label="gradient-button">
        Gradient Button
      </span>
    </Button>
  ));
