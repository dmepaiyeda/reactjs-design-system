import { space, color, layout, typography, border } from "styled-system";
import styled from "styled-components";

export const Card = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  //core
  space,
  color,
  typography,
  layout
);

Card.defaultProps = {
  maxWidth: "25%",
  bg: "lightGray",
  border: 1
};

export const ProductImg = styled.img(layout);

ProductImg.defaultProps = {
  borderColor: "lightGray"
};

ProductImg.displayName = "ProductImg";

export const BackgroundImg = styled.div(
  props => ({
    height: 0,
    paddingBottom: `${props.aspectRatio * 100}%`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundImage: `url(${props.image})`
  }),
  layout
);

BackgroundImg.defaultProps = {
  borderColor: "lightGray",
  aspectRatio: 1
};

BackgroundImg.displayName = "BackgroundImg";

export const Heading = styled.p(color, space, typography, layout);

Heading.defaultProps = {
  fontFamily: "sansSerif",
  color: "black",
  fontWeight: 700
};
Heading.displayName = "Heading";

export const Text = styled.p(typography, layout, space, color);
Text.displayName = "Text";

Text.defaultProps = {
  fontFamily: "sansSerif",
  color: "black"
};

export const Button = styled.button(space, color, border, typography, layout);

Button.displayName = "Button";
Button.defaultProps = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "sansSerif",
  bg: "white"
};

// export const Button = styled.button(
//   {
//     fontSize: 14,
//     fontWeight: 700
//   },
//   "fontSize",
//   "fontWeights",
//   "colors",
//   "width",
//   "fonts"
// );

// Button.displayName = "Box";
// Button.defaultProps = {};

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
