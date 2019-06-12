import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import { Buttons } from "./Button";

storiesOf("Elements|Buttons", module).add("Outline Button", () => (
  <div>
    <p> Button that is used for all product cards </p>
    <ThemeProvider theme={theme}>
      <Buttons />
    </ThemeProvider>
  </div>
));
