import React from "react";
import { Card, Heading, Text, BackgroundImg } from "../../src/primitives";
import { Buttons } from "./Button";

export const ProductCard = ({ image, title, subtitle, ...props }) => (
  <Card {...props} width={1 / 3}>
    <BackgroundImg width={1} aspectRatio={4 / 3} image={image} />
    <Heading as="h1" m="auto">
      {title}
    </Heading>
    <Text m="auto">{subtitle}</Text>
    <Buttons />
  </Card>
);
