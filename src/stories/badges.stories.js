import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import { BadgesComponent } from "./badges";

storiesOf("Elements|Badge", module).add("Badge", () => (
  <div>
    <ThemeProvider theme={theme}>
      <BadgesComponent content="content" />
    </ThemeProvider>
  </div>
));
