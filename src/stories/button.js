import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: ${props => props.theme.button.margin.horizontal};
  padding: 0.25em 1em;
  border-radius: 10px;
  `

  export default Button;