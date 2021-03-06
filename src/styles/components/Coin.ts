import styled from 'styled-components';

interface PProps {
  isPositive: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;

  main {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};

    button {
      display: flex;
      align-items: center;
      text-align: left;
      background: transparent;
      border: 0;
      outline: 0;
      min-width: 400px;

      img {
        height: 30px;
        width: 30px;
        margin-right: 10px;
      }

      h1 {
        font-size: 16px;
        width: 150px;
      }

      p {
        text-transform: uppercase;
      }
    }

    aside {
      display: flex;
      text-align: right;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export const P = styled.p<PProps>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.red : theme.colors.green};
`;
