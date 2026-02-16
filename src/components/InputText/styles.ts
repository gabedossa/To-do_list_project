import styled from 'styled-components';

export const ContainerInput = styled.main`
  padding: 0 40px;
  margin-top: 40px;
  /* height: 250px;  ← REMOVA esta linha */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: #ff6f00;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 120px;
  resize: none;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: #ff6f00;
  }
`;

export const SelectContainer = styled.div`
  margin-bottom: 16px;
`;

export const SelectLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff6f00;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #c75000;
  color: #f9f9f9;
  border: none;
  border-radius: 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #993e02;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const DicaTeclado = styled.small`
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 4px;
  color: #666;
  font-size: 13px;
  font-style: italic;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
