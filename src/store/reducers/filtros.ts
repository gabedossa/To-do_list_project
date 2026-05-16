import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../utils/enum/Tarefas';

type FiltrosState = {
  termoBusca: string;
  filtroStatus: enums.Status | null;
  filtroPrioridade: enums.Prioridade | null;
};

const initialState: FiltrosState = {
  termoBusca: '',
  filtroStatus: null,
  filtroPrioridade: null,
};

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState,
  reducers: {
    alterarTermoBusca: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload;
    },
    alterarFiltroStatus: (
      state,
      action: PayloadAction<enums.Status | null>
    ) => {
      state.filtroStatus =
        state.filtroStatus === action.payload ? null : action.payload;
    },
    alterarFiltroPrioridade: (
      state,
      action: PayloadAction<enums.Prioridade | null>
    ) => {
      state.filtroPrioridade =
        state.filtroPrioridade === action.payload ? null : action.payload;
    },
    limparFiltros: (state) => {
      state.filtroStatus = null;
      state.filtroPrioridade = null;
      state.termoBusca = '';
    },
  },
});

export const {
  alterarTermoBusca,
  alterarFiltroStatus,
  alterarFiltroPrioridade,
  limparFiltros,
} = filtrosSlice.actions;
export default filtrosSlice.reducer;
