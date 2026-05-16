import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 240px auto;
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 140px 1fr;
    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 120px 1fr;
    gap: 4px;
  }
`;

export default EstiloGlobal;
