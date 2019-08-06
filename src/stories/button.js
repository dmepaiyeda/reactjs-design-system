import React from "react";
import { OutlineButton } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const OutlinedButton = ({ price, ...props }) => (
  <div>
    <div>
      {/* <p>Button that is used for all product cards</p> */}
      <OutlineButton {...props} onClick={action("clicked")}>
        Outline Button - {(price = "$")}
      </OutlineButton>
    </div>

    {/* <div> */}
    {/* <p>Disabled button that is used for products that are unavailable</p> */}
    {/* <DisabledButton {...props} onClick={action("clicked")} disabled>
        Disabled Button
      </DisabledButton> */}
    {/* </div> */}
  </div>
);

export const PinkButton = ({ ...props }) => <div />;
