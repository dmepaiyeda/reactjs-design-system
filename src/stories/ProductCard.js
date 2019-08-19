import React from "react";
import styled from "styled-components";
import {
  Card,
  Heading,
  Text,
  BackgroundImg,
  Container,
  Blocklink,
  QuickView
} from "../../src/primitives";
import { OutlinedButtonComponent } from "./button";

const ProductCardContainer = styled(Card)`
  position: relative;
  ${QuickView} {
    display: none;
  }

  &:hover ${QuickView} {
    display: block;
  }
`;

export const ProductCard = ({
  image,
  secondImage,
  name,
  description,
  price,
  ...props
}) => (
  <ProductCardContainer {...props} width={1 / 3}>
    <a href="#test" style={{ position: "relative", display: "block" }}>
      <BackgroundImg
        width={1}
        aspectRatio={4 / 3}
        image={image}
        secondImage={secondImage}
      />
      <QuickView width={1}>Quick View</QuickView>
    </a>
    <Container p={5}>
      <Blocklink href="#test">
        <Heading>{name}</Heading>
        <Text>{description}</Text>
      </Blocklink>
      <OutlinedButtonComponent width={[1, 1, 1]}> </OutlinedButtonComponent>
    </Container>
  </ProductCardContainer>
);
