import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin-bottom: 64px;

  div {
    > h1 {
      margin-bottom: 20px;
      text-align: center;
    }

    form {
      input {
        padding-left: 16px;
        width: 300px;
        height: 50px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        outline: 0;
        background: linear-gradient(
          -90deg,
          ${props => props.theme.colors.background},
          ${props => lighten(0.0, props.theme.colors.primary)}
        );
        color: ${({ theme }) => theme.colors.textLight};
        font-weight: 700;

        &::placeholder {
          color: ${({ theme }) => theme.colors.textLight};
          font-weight: normal;
        }
      }
    }
  }
`;
