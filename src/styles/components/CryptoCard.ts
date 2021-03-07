import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem 1rem 1.8rem;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  min-width: 510px;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const Content = styled.main`
  aside {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }

  h1 {
    font-size: 2.8rem;
  }

  hr {
    border: 0;
    height: 2px;
    margin: 1.5rem 5rem 2rem 0;
    background-image: linear-gradient(to right, transparent, #ccc, transparent);
  }
`;
