import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TarefaInicial from '../../models/TarefaInicial';
import * as enums from '../../utils/enum/Tarefas';

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new TarefaInicial(
      'Comprar leite',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Comprar leite no supermercado'
    ),
    new TarefaInicial(
      'Estudar React',
      enums.Prioridade.MEDIO,
      enums.Status.PENDENTE,
      'Estudar os conceitos básicos de React'
    ),
    new TarefaInicial(
      'Limpar a casa',
      enums.Prioridade.BAIXA,
      enums.Status.PENDENTE,
      'Limpar a sala, cozinha e banheiro'
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload);
    },
    adicionar: (
      state,
      action: PayloadAction<{
        titulo: string;
        descricao: string;
        prioridade: enums.Prioridade;
        status: enums.Status;
      }>
    ) => {
      const { titulo, descricao, prioridade, status } = action.payload;

      const tarefaExistente = state.find(
        (t) => t.titulo.toLowerCase() === titulo.toLowerCase()
      );

      if (tarefaExistente) {
        alert('Já existe uma tarefa com este título');
        return;
      }

      const ultimoId =
        state.length > 0 ? Math.max(...state.map((t) => t.id)) : 0;

      const novaTarefa = new TarefaInicial(
        titulo,
        prioridade,
        status,
        descricao
      );

      Object.assign(novaTarefa, { id: ultimoId + 1 });

      state.push(novaTarefa);
    },
  },
});

export const { remover, adicionar } = tarefasSlice.actions;
export default tarefasSlice.reducer;
