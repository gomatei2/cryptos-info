import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(
      -90deg,
      ${props => lighten(0.2, props.theme.colors.primary)},
      ${props => props.theme.colors.background}
    );
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
