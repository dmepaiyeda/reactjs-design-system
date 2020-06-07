import React from "react";
import { OutlineButton, PinkButton } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const OutlinedButtonComponent = ({ price, ...props }) => (
  <div>
    <div>
      {/* <p>Button that is used for all product cards</p> */}
      <OutlineButton {...props} onClick={action("clicked")}>
        Add to bag - {(price = "$")}
      </OutlineButton>
    </div>
  </div>
);

export const PinkButtonComponent = ({ ...props }) => (
  <div>
    <PinkButton {...props}> Checkout </PinkButton>
  </div>
);
