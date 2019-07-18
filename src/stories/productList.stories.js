import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";

storiesOf("Features|Product List", module).add("Product List", () => (
  <div>
    <p> Product list </p>
    <ThemeProvider theme={theme} />
  </div>
));
