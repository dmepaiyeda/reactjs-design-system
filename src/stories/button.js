import React from "react";
import { OutlineButton, PinkButton } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const OutlinedButtonComponent = ({ price, ...props }) => (
  <div>
    <div>
      {/* <p>Button that is used for all product cards</p> */}
      <OutlineButton {...props} onClick={action("clicked")}>
        Outline Button - {(price = "$")}
      </OutlineButton>
    </div>
  </div>
);

export const PinkButtonComponent = ({ ...props }) => (
  <div>
    <PinkButton {...props}> Pink Button</PinkButton>
  </div>
);

export const DisabledButtonComponent = ({ ...props }) => (
  <div>
    <OutlineButton {...props} onClick={action("clicked")} disabled>
      Disabled Button
    </OutlineButton>
  </div>
);
