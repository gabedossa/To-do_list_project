import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 24px 16px;
  background: linear-gradient(180deg, #2c3e50 0%, #1e2a36 100%);
  height: 100vh;
  width: 280px;
  position: sticky;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  color: #fff;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const Campo = styled.input`
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-weight: 500;
  border-radius: 12px;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
    border-color: #c75000;
    box-shadow: 0 0 0 3px rgba(199, 80, 0, 0.2);
  }
`;

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const TituloSecao = styled.h3`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  margin: 20px 0 10px 0;
  font-weight: 500;
`;

export const ContadorTotal = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  margin-top: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const TotalLabel = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const TotalValue = styled.span`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #c75000;
  line-height: 1;
`;
