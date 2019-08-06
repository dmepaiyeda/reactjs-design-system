import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import { OutlinedButton } from "./button";

storiesOf("Elements|Buttons", module).add("Outline Button", () => (
  <div>
    <ThemeProvider theme={theme}>
      <OutlinedButton />
    </ThemeProvider>
  </div>
));

storiesOf("Elements|Buttons", module).add("Pink Button", () => (
  <div>
    <ThemeProvider theme={theme} />
  </div>
));
