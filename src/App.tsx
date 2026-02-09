import React from 'react'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/Barralateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
