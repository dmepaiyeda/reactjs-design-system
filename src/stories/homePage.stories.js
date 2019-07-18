import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";

storiesOf("Layouts|Home Page Layout", module).add("Home Page Layout", () => (
  <div>
    <p> Home Page </p>
    <ThemeProvider theme={theme} />
  </div>
));
