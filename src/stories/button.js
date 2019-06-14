import React from "react";
import { Button } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const Buttons = ({ ...props }) => (
  <Button {...props} onClick={action("clicked")} width="100%" py={3} px={2}>
    OUTLINE BUTTON
  </Button>
);
