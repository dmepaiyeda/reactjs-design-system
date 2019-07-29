import React from "react";
import { OutlineButton, DisabledButton } from "../../src/primitives";
import { action } from "@storybook/addon-actions";

export const Buttons = ({ ...props }) => (
  <div>
    <div>
      {/* <p>Button that is used for all product cards</p> */}
      <OutlineButton {...props} onClick={action("clicked")}>
        Outline Button
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
