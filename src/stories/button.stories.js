import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import { OutlinedButtonComponent, PinkButtonComponent } from "./button";

storiesOf("Elements|Buttons", module).add("Outline Button", () => (
  <div>
    <ThemeProvider theme={theme}>
      <OutlinedButtonComponent />
    </ThemeProvider>
  </div>
));

storiesOf("Elements|Buttons", module).add("Pink Button", () => (
  <div>
    <ThemeProvider theme={theme}>
      <PinkButtonComponent />
    </ThemeProvider>
  </div>
));

storiesOf("Elements|Buttons", module).add("Disabled Button", () => (
  <div>
    <ThemeProvider theme={theme}>
      <OutlinedButtonComponent disabled />
    </ThemeProvider>
  </div>
));
