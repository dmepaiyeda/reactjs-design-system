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
import { Buttons } from "./button";

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
  title,
  subtitle,
  ...props
}) => (
  <ProductCardContainer {...props} width={1 / 3}>
    <a href="#test" style={{ position: "relative" }}>
      <BackgroundImg
        width={1}
        aspectRatio={4 / 3}
        image={image}
        secondImage={secondImage}
      />
      <QuickView> Quick View </QuickView>
    </a>
    <Container p={5}>
      <Blocklink href="#test">
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </Blocklink>
      <Buttons width={[1, 1, 1]} />
    </Container>
  </ProductCardContainer>
);
