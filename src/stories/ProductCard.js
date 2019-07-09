import React from 'react';
import {
  Card,
  Heading,
  Text,
  BackgroundImg,
  Container,
  Blocklink,
  QuickView
} from '../../src/primitives';
import { Buttons } from './button';

export const ProductCard = ({
  image,
  secondImage,
  title,
  subtitle,
  ...props
}) => (
  <Card {...props} width={1 / 3}>
    <a href="#test">
      <BackgroundImg
        width={1}
        aspectRatio={4 / 3}
        image={image}
        secondImage={secondImage}
      />
      <QuickView />
    </a>
    <Container p={5}>
      <Blocklink href="#test">
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </Blocklink>
      <Buttons width={[1, 1, 1]} />
    </Container>
  </Card>
);
