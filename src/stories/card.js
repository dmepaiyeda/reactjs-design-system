import React from 'react';
import { Card, Box, ProductImg, Heading, Text } from '../../src/primitives'

// const Card = styled.div`
//     fontSize: ${props => props.theme.fontSizes[1]}px;
//     font: ${props => props.theme.fonts[0]}px;
//     background-color: ${props => props.theme.colors.black};
//     boxSizing: 'border-box';
//     minWidth: 0
// `

export const ProductCard = ({ image, title, subtitle, ...props }) => (
    <Card {...props}  p={[3, 4, 4]}>
        <Box width={1/2}>
            <ProductImg width={1} mb={2} src={image}/>
            <Heading as="h1" fontSize={20} m={4}>{title}</Heading>
            <Text as="p">{subtitle}</Text>
        </Box>
    </Card>
);

