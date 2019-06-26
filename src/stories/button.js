import React from 'react';
import { OutlineButton } from '../../src/primitives';
import { action } from '@storybook/addon-actions';

export const Buttons = ({ ...props }) => (
  <OutlineButton {...props} onClick={action('clicked')}>
    OUTLINE BUTTON
  </OutlineButton>
);
