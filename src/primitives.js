import system from 'system-components';

export const Card = system(
    {
        borderColor: 'white',
        boxSizing: 'border-box',
        minWidth: 0,
        border: 1,
        bg: 'white',
    },
    //core
    'colors',
    'fonts',
    'fontSizes', 
    'fontWeights'
);

Card.displayName = 'Card';

export const Box = system(
    //core
    'width'
    
);

Box.displayName = 'Box';

export const ProductImg = system(
    {
        as: 'img',
        p: 1,
        border: 1,
        borderColor: 'lightGray',
        height: 'auto',
        width: 'auto'
    },
    'height',
    'width'
);
ProductImg.displayName = 'ProductImg'

export const Heading = system(
    {
        as: 'h1',
        fontSize: 6,
        fontFamily: 'sansSerif', 
        color: 'black'
    },
    'fonts',
    'fontSize',
    'fontFamily',
    'colors'
);
Heading.displayName = 'Heading';

export const Text = system(
    {
        as: 'p',
        fontFamily: 'sansSerif',
        color: 'black'
    },
    'fonts',
    'fontFamily',
    'colors'
);
Text.displayName = 'Text';