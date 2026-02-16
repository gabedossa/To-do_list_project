import { styled } from 'styled-components';
import Variaveis from '../../styles/Variaveis';
import { Prioridade, Status } from '../../utils/enum/Tarefas';

type tagProps = {
  prioridade?: Prioridade;
  status?: Status;
  parametro: 'prioridade' | 'status';
};

function retornaCorFundo(props: tagProps) {
  if (props.parametro === 'status') {
    if (props.status === Status.PENDENTE) {
      return Variaveis.amarelo;
    } else if (props.status === Status.CONCLUIDA) {
      return Variaveis.verde;
    }
  } else if (props.parametro === 'prioridade') {
    if (props.prioridade === Prioridade.URGENTE) {
      return Variaveis.vermelho;
    } else if (props.prioridade === Prioridade.IMPORTANTE) {
      return Variaveis.amarelo;
    } else if (props.prioridade === Prioridade.NORMAL) {
      return `#CCCCCC`;
    }
  }
  return `#CCCCCC`;
}

export const Cards = styled.div`
    background-color: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding 16px;
    border-radius: 16px;
    margin-bottom: 32px;
    padding: 16px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Tag = styled.span<tagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  border: none;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 16px;
  resize: none;
  botder: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0 16px 8px;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;
export const BotaoSalvar = styled(Botao)`
  background-color: ${Variaveis.verde};
`;
export const BotaoCancelar = styled(Botao)`
  background-color: ${Variaveis.amarelo};
`;
export const BotaoRemover = styled(Botao)`
  background-color: ${Variaveis.vermelho};
`;
