import React from "react";
import { Button } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const Buttons = ({ text, ...props }) => (
  <Button
    {...props}
    border="1px solid"
    borderRadius={3}
    onClick={action("clicked")}
    textAlign="center"
    width="30%"
    minHeight={16}
    p={2}
  >
    Outline Button
  </Button>
);
