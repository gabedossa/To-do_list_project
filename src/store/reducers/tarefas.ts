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
      'Comprar leite no supermercado',
      1
    ),
    new TarefaInicial(
      'Estudar React',
      enums.Prioridade.MEDIO,
      enums.Status.PENDENTE,
      'Estudar os conceitos básicos de React',
      2
    ),
    new TarefaInicial(
      'Limpar a casa',
      enums.Prioridade.BAIXA,
      enums.Status.PENDENTE,
      'Limpar a sala, cozinha e banheiro',
      3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload);
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number;
        titulo: string;
        descricao: string;
        prioridade: enums.Prioridade;
        status: enums.Status;
      }>
    ) => {
      return state.map((tarefa) => {
        if (tarefa.id !== action.payload.id) return tarefa;
        return {
          ...tarefa,
          titulo: action.payload.titulo,
          descricao: action.payload.descricao,
          prioridade: action.payload.prioridade,
          status: action.payload.status,
        };
      });
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
        descricao,
        ultimoId + 1
      );

      state.push(novaTarefa);
    },
  },
});

export const { remover, adicionar, editar } = tarefasSlice.actions;
export default tarefasSlice.reducer;
