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
import { ProductCard } from "./ProductCard";

export const ProductList = ({
  image,
  secondImage,
  name,
  description,
  price,
  ...props
}) => (
  <div>
    <ProductCard {...props} />
    <ProductCard {...props} />
  </div>
);
