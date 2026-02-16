import { useState } from 'react';
import * as S from './styles';
import { Prioridade, Status } from '../../utils/enum/Tarefas';

type Props = {
  titulo: string;
  prioridade: Prioridade;
  status: Status;
  descricao: string;
};

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [editando, setEditando] = useState(false);
  return (
    <S.Cards>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao}></S.Descricao>
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Cards>
  );
};
export default Tarefa;
