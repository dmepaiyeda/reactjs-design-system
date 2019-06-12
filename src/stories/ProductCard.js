import React from "react";
import { Card, Img, BackgroundImg, Heading, Text } from "../../src/primitives";

// const Card = styled.div`
//     fontSize: ${props => props.theme.fontSizes[1]}px;
//     font: ${props => props.theme.fonts[0]}px;
//     background-color: ${props => props.theme.colors.black};
//     boxSizing: 'border-box';
//     minWidth: 0
// `
console.log(BackgroundImg);

export const ProductCard = ({ image, title, subtitle, ...props }) => (
  <Card {...props} width={1 / 3}>
    <BackgroundImg width={1} aspectRatio={4 / 3} image={image} />
    {/* <Heading as="h1" m="auto">{title}</Heading>
        <Text as="p">{subtitle}</Text> */}
  </Card>
);
