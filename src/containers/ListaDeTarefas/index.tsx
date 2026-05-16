import { useSelector } from 'react-redux';
import Tarefa from '../../components/tarefa';
import { Container } from './styles';
import { RootReducer } from '../../store';
import { InputText } from '../../components/InputText';

const ListaDeTarefas = () => {
  const { tarefas, filtros } = useSelector((state: RootReducer) => state);

  const tarefasFiltradas = tarefas
    .filter((t) =>
      filtros.termoBusca
        ? t.titulo.toLowerCase().includes(filtros.termoBusca.toLowerCase())
        : true
    )
    .filter((t) =>
      filtros.filtroStatus ? t.status === filtros.filtroStatus : true
    )
    .filter((t) =>
      filtros.filtroPrioridade
        ? t.prioridade === filtros.filtroPrioridade
        : true
    );

  return (
    <Container>
      <InputText />
      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              id={tarefa.id}
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              descricao={tarefa.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeTarefas;
