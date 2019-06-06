import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from "../../src/theme/theme";
import { ThemeProvider } from 'styled-components';
import Button from "./button";

// storiesOf('Skincare', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module)
  .add('Outline Button', () => 
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')} textAlign="center">OUTLINE BUTTON</Button> 
    </ThemeProvider>);
  




  
