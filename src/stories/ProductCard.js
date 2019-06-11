import React from 'react';
import { Card, ProductImg, Heading, Text } from '../primitives'

// const Card = styled.div`
//     fontSize: ${props => props.theme.fontSizes[1]}px;
//     font: ${props => props.theme.fonts[0]}px;
//     background-color: ${props => props.theme.colors.black};
//     boxSizing: 'border-box';
//     minWidth: 0
// `

export const ProductCard = ({ image, title, subtitle, ...props }) => (
    <Card {...props} width='25%'>
        <ProductImg width={1} height='25%' src={image}/>
        <Heading as="h1" m="auto">{title}</Heading>
        <Text as="p">{subtitle}</Text>
    </Card>
);

