import styled from 'styled-components';

type CardProps = {
  ativo?: boolean;
};

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.ativo ? '#c75000' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid
    ${(props) => (props.ativo ? '#c75000' : 'rgba(255, 255, 255, 0.05)')};

  &:hover {
    background-color: ${(props) =>
      props.ativo ? '#993e02' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
    border-color: #c75000;
  }
`;

export const Legenda = styled.span`
  font-weight: 500;
  color: #fff;
  font-size: 14px;
`;

export const Contador = styled.span`
  background-color: #c75000;
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
`;
