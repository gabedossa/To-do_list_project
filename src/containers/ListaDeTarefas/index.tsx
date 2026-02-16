import { useSelector } from 'react-redux';
import Tarefa from '../../components/tarefa';
import { Container } from './styles';
import { RootReducer } from '../../store';
import { InputText } from '../../components/InputText';

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state);

  return (
    <Container>
      <InputText />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
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
