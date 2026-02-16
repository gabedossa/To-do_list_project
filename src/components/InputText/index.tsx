import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ContainerInput,
  Input,
  TextArea,
  Button,
  InputCard,
  SelectContainer,
  SelectLabel,
  Select,
  DicaTeclado,
} from './styles';
import { adicionar } from '../../store/reducers/tarefas';
import * as enums from '../../utils/enum/Tarefas';

export const InputText = () => {
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState<enums.Prioridade>(
    enums.Prioridade.MEDIO
  );

  const adicionarTarefa = () => {
    if (!titulo.trim() || !descricao.trim()) {
      alert('Preencha todos os campos');
      return;
    }

    dispatch(
      adicionar({
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        prioridade,
        status: enums.Status.PENDENTE,
      })
    );

    setTitulo('');
    setDescricao('');
    setPrioridade(enums.Prioridade.MEDIO);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      adicionarTarefa();
    }
  };

  return (
    <ContainerInput>
      <InputCard>
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <TextArea
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <SelectContainer>
          <SelectLabel>Prioridade:</SelectLabel>
          <Select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)}
          >
            <option value={enums.Prioridade.URGENTE}>🔴 Urgente</option>
            <option value={enums.Prioridade.MEDIO}>🟡 Médio</option>
            <option value={enums.Prioridade.BAIXA}>🟢 Baixa</option>
          </Select>
        </SelectContainer>

        <Button
          onClick={adicionarTarefa}
          disabled={!titulo.trim() || !descricao.trim()}
        >
          Adicionar Tarefa
        </Button>

        <DicaTeclado>
          ⌨️ Dica: Pressione Ctrl + Enter para adicionar rapidamente
        </DicaTeclado>
      </InputCard>
    </ContainerInput>
  );
};

export default InputText;
