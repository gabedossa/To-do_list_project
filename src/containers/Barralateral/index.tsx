import { useSelector } from 'react-redux';
import FiltroCard from '../../components/FiltroCard';
import { RootReducer } from '../../store';
import * as S from './styles';
import * as enums from '../../utils/enum/Tarefas';

const BarraLateral = () => {
  const { tarefas } = useSelector((state: RootReducer) => state);

  const contagens = {
    pendentes: tarefas.filter((t) => t.status === enums.Status.PENDENTE).length,
    concluidas: tarefas.filter((t) => t.status === enums.Status.CONCLUIDA)
      .length,
    urgentes: tarefas.filter((t) => t.prioridade === enums.Prioridade.URGENTE)
      .length,
    importantes: tarefas.filter(
      (t) => t.prioridade === enums.Prioridade.IMPORTANTE
    ).length,
    normal: tarefas.filter((t) => t.prioridade === enums.Prioridade.NORMAL)
      .length,
    todas: tarefas.length,
  };

  // Definindo os tipos explicitamente
  type TipoFiltro = 'status' | 'prioridade' | 'todas';

  const filtrosStatus: Array<{
    legenda: string;
    contador: number;
    tipo: TipoFiltro;
    valor: enums.Status | null;
  }> = [
    {
      legenda: 'Pendentes',
      contador: contagens.pendentes,
      tipo: 'status',
      valor: enums.Status.PENDENTE,
    },
    {
      legenda: 'Concluídas',
      contador: contagens.concluidas,
      tipo: 'status',
      valor: enums.Status.CONCLUIDA,
    },
  ];

  const filtrosPrioridade: Array<{
    legenda: string;
    contador: number;
    tipo: TipoFiltro;
    valor: enums.Prioridade | null;
  }> = [
    {
      legenda: 'Urgentes',
      contador: contagens.urgentes,
      tipo: 'prioridade',
      valor: enums.Prioridade.URGENTE,
    },
    {
      legenda: 'Importantes',
      contador: contagens.importantes,
      tipo: 'prioridade',
      valor: enums.Prioridade.IMPORTANTE,
    },
    {
      legenda: 'Normal',
      contador: contagens.normal,
      tipo: 'prioridade',
      valor: enums.Prioridade.NORMAL,
    },
  ];

  const filtrosGerais: Array<{
    legenda: string;
    contador: number;
    tipo: TipoFiltro;
    valor: null;
  }> = [
    {
      legenda: 'Todas',
      contador: contagens.todas,
      tipo: 'todas',
      valor: null,
    },
  ];

  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="🔍 Buscar tarefas..." />

        <S.TituloSecao>Status</S.TituloSecao>
        <S.Filtros>
          {filtrosStatus.map((filtro) => (
            <FiltroCard
              key={filtro.legenda}
              legenda={filtro.legenda}
              contador={filtro.contador}
              tipo={filtro.tipo}
              valor={filtro.valor}
            />
          ))}
        </S.Filtros>

        <S.TituloSecao>Prioridade</S.TituloSecao>
        <S.Filtros>
          {filtrosPrioridade.map((filtro) => (
            <FiltroCard
              key={filtro.legenda}
              legenda={filtro.legenda}
              contador={filtro.contador}
              tipo={filtro.tipo}
              valor={filtro.valor}
            />
          ))}
        </S.Filtros>

        <S.TituloSecao>Geral</S.TituloSecao>
        <S.Filtros>
          {filtrosGerais.map((filtro) => (
            <FiltroCard
              key={filtro.legenda}
              legenda={filtro.legenda}
              contador={filtro.contador}
              tipo={filtro.tipo}
              valor={filtro.valor}
            />
          ))}
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
