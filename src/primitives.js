import { space, color, layout, typography, border } from "styled-system";
import styled from "styled-components";

export const Container = styled.div(layout, space, border, typography);
Container.defaultProps = {
  display: "block"
};

export const Card = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
    overflow: "hidden"
  },
  //core
  space,
  color,
  typography,
  layout,
  border
);

Card.defaultProps = {
  maxWidth: "25%",
  bg: "#fafafa",
  border: 1,
  marginRight: 16,
  borderRadius: 3
};

export const QuickView = styled.button(
  props => ({
    position: "absolute",
    height: 32,
    bottom: 0,
    backgroundColor: "rgba(250, 249, 247, 0.6)",
    textAlign: "center",
    padding: 0,
    "&:hover": {
      color: `${props.theme.colors.blue}`
    }
  }),
  layout,
  space,
  border,
  typography,
  color
);
QuickView.defaultProps = {
  fontFamily: "sansSerif",
  fontSize: 12,
  fontWeight: 700,
  border: "none",
  color: "black"
};

//styled components
export const Link = styled.a`
  text-decoration: none;
`;

export const Blocklink = styled(Link)`
  &:focus > *,
  &:hover > * {
    text-decoration: underline ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
  }
`;

export const ProductImg = styled.img(layout); //styled system

ProductImg.defaultProps = {
  borderColor: "#fafafa"
};

ProductImg.displayName = "ProductImg";

export const BackgroundImg = styled.div(
  props => ({
    height: 0,
    paddingBottom: `${props.aspectRatio * 100}%`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundImage: `url(${props.image})`,
    "&:hover": {
      backgroundImage: `url(${props.secondImage})`
    }
  }),
  layout
);

//position: absolute - quick view

BackgroundImg.defaultProps = {
  borderColor: "#fafafa",
  aspectRatio: 1
};

BackgroundImg.displayName = "BackgroundImg";

export const Badge = styled.div(props => ({}), space, color, typography);
Badge.defaultProps = {
  color: "black"
};

export const Heading = styled.p(color, space, typography, layout);

Heading.defaultProps = {
  fontFamily: "sansSerif",
  color: "black",
  fontWeight: 700,
  fontSize: 16,
  marginTop: 3
};
Heading.displayName = "Heading";

export const Text = styled.p(typography, layout, space, color);
Text.displayName = "Text";

Text.defaultProps = {
  fontFamily: "sansSerif",
  color: "black",
  fontSize: 14,
  fontWeight: 300
};

//Buttons
export const Button = styled.button(space, color, border, typography, layout);
Button.displayName = "Button";
Button.defaultProps = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "sansSerif",
  bg: "white",
  border: 1,
  borderColor: "black",
  borderStyle: "solid",
  borderRadius: 3,
  textAlign: "center",
  minHeight: 40,
  lineHeight: 1,
  paddingTop: 1,
  paddingBottom: 1
};

export const OutlineButton = styled(Button)`
  cursor: pointer;
  position: relative;
  transition: all 0.5 cubic-bezier(0.165, 0.84, 0.44, 1);
  text-transform: uppercase; //making the text upper case here to improve accessibility

  &::after {
    content: "";
    box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover:enabled:after,
  &:focus:enabled:after {
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: rgb(217, 217, 217);
    color: rgb(217, 217, 217);
  }
`;

export const PinkButton = styled(Button)`
  cursor: pointer;
  position: relative;
  transition: all 0.5 cubic-bezier(0.165, 0.84, 0.44, 1);
  text-transform: uppercase; //making the text upper case here to improve accessibility
  background-color: ${props => props.theme.colors.pink};
  border-color: ${props => props.theme.colors.pink};

  &::after {
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover:enabled:after,
  &:focus:enabled:after {
    opacity: 1;
    background-color: ${props => props.theme.colors.pink};
    border-color: ${props => props.theme.colors.pink};
  }

  &:hover,
  &:focus {
    background-color: white;
    border-color: black;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.pink};
    background-color: ${props => props.theme.colors.pink};
    color: black;
    border-radius: 0px;
  }
`;

// @media (min-width: 1200px)
// <style>
// .iWAANa {
//     width: 100%;
//     max-width: unset;
// }
// @media (min-width: 1200px)
// <style>
// .iWAANa {
//     font-size: 14px;
//     min-height: 40px;
//     line-height: 24px;
// }
