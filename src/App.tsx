import React from 'react';
import EstiloGlobal, { Container } from './styles';
import BarraLateral from './containers/Barralateral';
import ListaDeTarefas from './containers/ListaDeTarefas';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  );
}

export default App;
