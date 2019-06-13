import React from "react";
import { Button } from "../primitives";
import { action } from "@storybook/addon-actions";

export const Buttons = ({ ...props }) => (
  <Button {...props} onClick={action("clicked")} py={3} px={2}>
    OUTLINE BUTTON
  </Button>
);
