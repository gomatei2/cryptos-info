import { lighten, shade } from 'polished';
import styled from 'styled-components';

interface LocaleProps {
  isActive: boolean;
}

export const Container = styled.header`
  height: 4rem;
  background: linear-gradient(
    -90deg,
    ${props => props.theme.colors.background},
    ${props => props.theme.colors.primary}
  );
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      height: 3rem;
      width: 3rem;
    }

    strong {
      margin-left: 0.5rem;
      font-size: 1.8rem;
      cursor: default;
    }
  }

  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 16rem;
    height: 2rem;
  }
`;

export const Locale = styled.div<LocaleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme }) => theme.colors.background};

  &:last-of-type {
    margin-left: 1rem;
  }

  &:hover {
    background: ${({ theme, isActive }) =>
      isActive ? shade(0.1, theme.colors.primary) : 'transparent'};
    color: ${({ theme }) => lighten(0.1, theme.colors.background)};
  }

  a {
    font-size: 1.2rem;
  }
`;
