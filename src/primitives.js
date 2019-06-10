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
    'colors',
    'fonts',
    'fontSizes', 
    'fontWeights'
);

Box.displayName = 'Box';

export const Product = system(
    {
        border: 1,
        borderColor: 'lightGray',
        borderRadius: '100%',
    },
    'height'
);