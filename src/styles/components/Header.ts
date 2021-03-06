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
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.background : theme.colors.text};

  &:last-of-type {
    margin-left: 1rem;
  }

  a {
    font-size: 1.2rem;
  }
`;
