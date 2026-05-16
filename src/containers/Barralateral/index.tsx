import { useDispatch, useSelector } from 'react-redux';
import FiltroCard from '../../components/FiltroCard';
import { RootReducer } from '../../store';
import {
  alterarTermoBusca,
  alterarFiltroStatus,
  alterarFiltroPrioridade,
  limparFiltros,
} from '../../store/reducers/filtros';
import * as S from './styles';
import * as enums from '../../utils/enum/Tarefas';

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { tarefas, filtros } = useSelector((state: RootReducer) => state);

  const contagens = {
    pendentes: tarefas.filter((t) => t.status === enums.Status.PENDENTE).length,
    concluidas: tarefas.filter((t) => t.status === enums.Status.CONCLUIDA)
      .length,
    urgentes: tarefas.filter((t) => t.prioridade === enums.Prioridade.URGENTE)
      .length,
    medio: tarefas.filter((t) => t.prioridade === enums.Prioridade.MEDIO)
      .length,
    baixa: tarefas.filter((t) => t.prioridade === enums.Prioridade.BAIXA)
      .length,
    todas: tarefas.length,
  };

  const todasAtivo =
    filtros.filtroStatus === null && filtros.filtroPrioridade === null;

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="🔍 Buscar tarefas..."
          value={filtros.termoBusca}
          onChange={(e) => dispatch(alterarTermoBusca(e.target.value))}
        />

        <S.TituloSecao>Status</S.TituloSecao>
        <S.Filtros>
          <FiltroCard
            legenda="Pendentes"
            contador={contagens.pendentes}
            ativo={filtros.filtroStatus === enums.Status.PENDENTE}
            onClick={() => dispatch(alterarFiltroStatus(enums.Status.PENDENTE))}
          />
          <FiltroCard
            legenda="Concluídas"
            contador={contagens.concluidas}
            ativo={filtros.filtroStatus === enums.Status.CONCLUIDA}
            onClick={() =>
              dispatch(alterarFiltroStatus(enums.Status.CONCLUIDA))
            }
          />
        </S.Filtros>

        <S.TituloSecao>Prioridade</S.TituloSecao>
        <S.Filtros>
          <FiltroCard
            legenda="Urgentes"
            contador={contagens.urgentes}
            ativo={filtros.filtroPrioridade === enums.Prioridade.URGENTE}
            onClick={() =>
              dispatch(alterarFiltroPrioridade(enums.Prioridade.URGENTE))
            }
          />
          <FiltroCard
            legenda="Médio"
            contador={contagens.medio}
            ativo={filtros.filtroPrioridade === enums.Prioridade.MEDIO}
            onClick={() =>
              dispatch(alterarFiltroPrioridade(enums.Prioridade.MEDIO))
            }
          />
          <FiltroCard
            legenda="Baixa"
            contador={contagens.baixa}
            ativo={filtros.filtroPrioridade === enums.Prioridade.BAIXA}
            onClick={() =>
              dispatch(alterarFiltroPrioridade(enums.Prioridade.BAIXA))
            }
          />
        </S.Filtros>

        <S.TituloSecao>Geral</S.TituloSecao>
        <S.Filtros>
          <FiltroCard
            legenda="Todas"
            contador={contagens.todas}
            ativo={todasAtivo}
            onClick={() => dispatch(limparFiltros())}
          />
        </S.Filtros>

        <S.ContadorTotal>
          <S.TotalLabel>Total de tarefas</S.TotalLabel>
          <S.TotalValue>{contagens.todas}</S.TotalValue>
        </S.ContadorTotal>
      </div>
    </S.Aside>
  );
};

export default BarraLateral;
