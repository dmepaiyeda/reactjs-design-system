import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import { Buttons } from "./button";

storiesOf("Elements", module).add("Outline Button", () => (
  <div>
    <ThemeProvider theme={theme}>
      <Buttons />
    </ThemeProvider>
  </div>
));

storiesOf("Elements", module).add("Pink Button", () => (
  <div>
    <ThemeProvider theme={theme}>{/* <Buttons /> */}</ThemeProvider>
  </div>
));
