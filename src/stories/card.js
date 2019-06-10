import React from 'react';
import { Card, Box, Product } from '../../src/primitives'

// const Card = styled.div`
//     fontSize: ${props => props.theme.fontSizes[1]}px;
//     font: ${props => props.theme.fonts[0]}px;
//     background-color: ${props => props.theme.colors.black};
//     boxSizing: 'border-box';
//     minWidth: 0
// `

export const ProductCard = ({ image, title, subtitle, ...props }) => (
    <Card {...props}  p={[3, 4, 4]}>
        <Box textAlign="center">
            <Product height={3} mb={2} src={image}/>
        </Box>
    </Card>
);

