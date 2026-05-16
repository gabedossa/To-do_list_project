import styled from 'styled-components';
export const Container = styled.main`
  padding: 0 48px;
  height: 95vh;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: auto;
    overflow-y: visible;
  }
`;
