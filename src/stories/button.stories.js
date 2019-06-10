import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import Button from "./button";
import theme from "../../src/theme/theme";

// storiesOf('Skincare', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Elements|Buttons', module)
  .add('Outline Button', () => 
    <div>
      <p> Button that is used for all product cards </p>
      <ThemeProvider theme={theme}>
        <Button onClick={action('clicked')} textAlign="center">Outline Button</Button> 
      </ThemeProvider>
    </div>
    );

  




  
