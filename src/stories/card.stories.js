import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { ProductCard } from "./ProductCard";
import theme from "../theme/theme";

//put styling related stuff in the html and other stuff in the primitives file
storiesOf("Patterns|Card", module)
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    "ProductCard",
    () => (
      <ThemeProvider theme={theme}>
        <ProductCard
          name="Heading"
          description="subheading"
          image="https://static-assets.glossier.com/production/spree/images/attachments/000/003/860/portrait_normal/01_ShopGrid.jpg"
          secondImage="https://static-assets.glossier.com/production/spree/images/attachments/000/003/730/portrait_normal/bubblewrap.jpg"
          price="$$"
        />
      </ThemeProvider>
    ),
    {
      notes: "djjd"
    },
    { viewport: { defaultViewport: "iphonex" } }
  );
