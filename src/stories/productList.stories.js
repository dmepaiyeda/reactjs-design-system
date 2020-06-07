import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import { ProductList } from "./ProductList";
import { ProductCard } from "./ProductCard";

storiesOf("Features|Product List", module).add("Product List", () => (
  <div>
    <p> Product list </p>
    <ThemeProvider theme={theme}>
      <ProductList title="Products">
        {[0, 1, 2, 3, 4, 5].map((key, name) => (
          <ProductCard
            key={key}
            name="Heading"
            description="description"
            image="https://static-assets.glossier.com/production/spree/images/attachments/000/003/860/portrait_normal/01_ShopGrid.jpg"
            secondImage="https://static-assets.glossier.com/production/spree/images/attachments/000/003/730/portrait_normal/bubblewrap.jpg"
            price="$$"
          />
        ))}
      </ProductList>
    </ThemeProvider>
  </div>
));
