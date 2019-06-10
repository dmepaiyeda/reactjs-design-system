import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { ProductCard } from './card'
import theme from '../theme/theme'

storiesOf('Patterns|ProductCard', module)
    .add('Card', () =>
        <ThemeProvider theme={theme}>
                <ProductCard
                    title="Hello"
                    subtitle="subheading"
                    image="https://static-assets.glossier.com/production/spree/images/attachments/000/003/860/portrait_normal/01_ShopGrid.jpg"
                >
                </ProductCard>
        </ThemeProvider>
    );