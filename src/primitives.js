import { space, color, layout, typography } from 'styled-system'
import styled from 'styled-components'

// export const Card = styled(
//     {
//         boxSizing: 'border-box',
//         minWidth: 0,
//         maxWidth: '25%',
//         bg: 'lightGray', 
//         border: 1
//     },
//     //core
//     theme.width,
//     theme.colors,
//     theme.fonts,
//     theme.width, 
//     theme.fontSizes,
//     theme.fontWeights
// );

export const Card = styled.div(
    {
        boxSizing: 'border-box',
        minWidth: 0,
    },
    //core
    space,
    color,
    typography,
    layout, 
);

Card.defaultProps = {
    maxWidth: '25%',
    bg: 'lightGray', 
    border: 1,
}

Card.displayName = 'Card';

// export const Box = styled(
//     {
//         borderColor: 'blue',
//         border: 2
//     },
//     //core
//     'width',
//     'colors'
// );

// Box.displayName = 'Box';

export const ProductImg = styled(
    {
        as: 'img',
        borderColor: 'lightGray',
    },
    'height',
    'width'
);
ProductImg.displayName = 'ProductImg'

export const Heading = styled(
    {
        as: 'h1',
        fontFamily: 'sansSerif', 
        color: 'black',
        fontWeight: 700
    },
    'fonts',
    'fontSize',
    'fontWeights',
    'fontFamily',
    'colors'
);
Heading.displayName = 'Heading';

export const Text = styled(
    {
        as: 'p',
        fontFamily: 'sansSerif',
        color: 'black',
    },
    'fonts',
    'fontFamily',
    'fontWeights',
    'colors'
);
Text.displayName = 'Text';

export const Button = styled(
    {
        fontSize: 14,
        fontWeight: 700,

    },
    'fontSize',
    'fontWeights',
    'colors',
    'width',
    'fonts'
)