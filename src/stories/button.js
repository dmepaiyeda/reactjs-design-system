import styled from 'styled-components';

//1px = 0.1rem

const Button = styled.button`
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: ${props => props.theme.fontWeights[0]};
  margin: 14px 0px;
  padding: 7px 6px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  text-align: center;
  width: 30%;
  min-height: 16px;
  font-family: ${props => props.theme.fonts.sansSerif};

  border: 1px solid ${props => props.theme.colors.black};
  `
export default Button;