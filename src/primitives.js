import { space, color, layout, typography, border } from 'styled-system';
import styled from 'styled-components';

export const Card = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  //core
  space,
  color,
  typography,
  layout
);

Card.defaultProps = {
  maxWidth: '25%',
  bg: '#fafafa',
  border: 1
};

export const Container = styled.div(layout, space, border, typography);
Container.defaultProps = {
  display: 'block'
};

export const ProductImg = styled.img(layout);

ProductImg.defaultProps = {
  borderColor: '#fafafa'
};

ProductImg.displayName = 'ProductImg';

export const BackgroundImg = styled.div(
  props => ({
    height: 0,
    paddingBottom: `${props.aspectRatio * 100}%`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: `url(${props.image})`
  }),
  layout
);

BackgroundImg.defaultProps = {
  borderColor: '#fafafa',
  aspectRatio: 1
};

BackgroundImg.displayName = 'BackgroundImg';

export const Heading = styled.p(color, space, typography, layout);

Heading.defaultProps = {
  fontFamily: 'sansSerif',
  color: 'black',
  fontWeight: 700,
  fontSize: 16,
  margin: 0
};
Heading.displayName = 'Heading';

export const Text = styled.p(typography, layout, space, color);
Text.displayName = 'Text';

Text.defaultProps = {
  fontFamily: 'sansSerif',
  color: 'black',
  fontSize: 14,
  fontWeight: 300
};

export const Button = styled.button(space, color, border, typography, layout);
Button.displayName = 'Button';
Button.defaultProps = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: 'sansSerif',
  bg: 'white',
  border: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  borderRadius: 3,
  textAlign: 'center',
  minHeight: 40,
  lineHeight: 1
};

// export const Blocklink = styled(link)`
//   text-decoration: none;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `;

export const Link = styled.a`
  text-decoration: none;
  color: blue;
`;

export const Blocklink = styled(Link)`
  &:visited,
  &:hover {
    text-decoration: underline blue;
  }
`;
