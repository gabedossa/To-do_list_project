import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { Prioridade, Status } from '../../utils/enum/Tarefas';
import { remover, editar } from '../../store/reducers/tarefas';

type Props = {
  id: number;
  titulo: string;
  prioridade: Prioridade;
  status: Status;
  descricao: string;
};

const Tarefa = ({ id, titulo, prioridade, status, descricao }: Props) => {
  const dispatch = useDispatch();
  const [editando, setEditando] = useState(false);
  const [tituloEdit, setTituloEdit] = useState(titulo);
  const [descricaoEdit, setDescricaoEdit] = useState(descricao);
  const [prioridadeEdit, setPrioridadeEdit] = useState(prioridade);
  const [statusEdit, setStatusEdit] = useState(status);

  useEffect(() => {
    setTituloEdit(titulo);
    setDescricaoEdit(descricao);
    setPrioridadeEdit(prioridade);
    setStatusEdit(status);
  }, [titulo, descricao, prioridade, status]);

  const salvar = () => {
    dispatch(
      editar({
        id,
        titulo: tituloEdit,
        descricao: descricaoEdit,
        prioridade: prioridadeEdit,
        status: statusEdit,
      })
    );
    setEditando(false);
  };

  const cancelar = () => {
    setTituloEdit(titulo);
    setDescricaoEdit(descricao);
    setPrioridadeEdit(prioridade);
    setStatusEdit(status);
    setEditando(false);
  };

  return (
    <S.Cards>
      {editando ? (
        <>
          <S.InputTitulo
            value={tituloEdit}
            onChange={(e) => setTituloEdit(e.target.value)}
          />
          <S.SelectEdicao
            value={prioridadeEdit}
            onChange={(e) => setPrioridadeEdit(e.target.value as Prioridade)}
          >
            <option value={Prioridade.URGENTE}>{Prioridade.URGENTE}</option>
            <option value={Prioridade.IMPORTANTE}>
              {Prioridade.IMPORTANTE}
            </option>
            <option value={Prioridade.NORMAL}>{Prioridade.NORMAL}</option>
          </S.SelectEdicao>
          <S.SelectEdicao
            value={statusEdit}
            onChange={(e) => setStatusEdit(e.target.value as Status)}
          >
            <option value={Status.PENDENTE}>{Status.PENDENTE}</option>
            <option value={Status.CONCLUIDA}>{Status.CONCLUIDA}</option>
          </S.SelectEdicao>
          <S.Descricao
            value={descricaoEdit}
            onChange={(e) => setDescricaoEdit(e.target.value)}
          />
        </>
      ) : (
        <>
          <S.Titulo>{titulo}</S.Titulo>
          <S.Tag parametro="prioridade" prioridade={prioridade}>
            {prioridade}
          </S.Tag>
          <S.Tag parametro="status" status={status}>
            {status}
          </S.Tag>
          <S.Descricao value={descricao} readOnly />
        </>
      )}
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar onClick={salvar}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelar}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Cards>
  );
};

export default Tarefa;
