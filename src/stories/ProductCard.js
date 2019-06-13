import React from "react";
import {
  Card,
  Heading,
  Text,
  BackgroundImg,
  Container
} from "../../src/primitives";
import { Buttons } from "./button";

export const ProductCard = ({ image, title, subtitle, ...props }) => (
  <Card {...props} width={1 / 3}>
    <BackgroundImg width={1} aspectRatio={4 / 3} image={image} />
    <Heading as="h1" m="auto">
      {title}
    </Heading>
    <Text my={2}>{subtitle}</Text>
    <Container textAlign="center">
      <Buttons m={4} />
    </Container>
  </Card>
);
