import React from 'react';
import {
  Card,
  Heading,
  Text,
  BackgroundImg,
  Container
} from '../../src/primitives';
import { Buttons } from './button';

export const ProductCard = ({ image, title, subtitle, ...props }) => (
  <Card {...props} width={1 / 3}>
    <BackgroundImg width={1} aspectRatio={4 / 3} image={image} />
    <Container p={5}>
      <a href="djdk">
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </a>
      <Buttons width={[1, 1, 1]} />
    </Container>
  </Card>
);
