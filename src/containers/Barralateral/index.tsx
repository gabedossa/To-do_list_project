import FiltroCard from '../../components/FiltroCard';
import * as S from './styles';

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contaador={1} />
          <FiltroCard legenda="Concluídas" contaador={2} />
          <FiltroCard legenda="Urgentes" contaador={3} />
          <FiltroCard legenda="Importantes" contaador={4} />
          <FiltroCard legenda="Normal" contaador={5} />
          <FiltroCard legenda="Todas" contaador={10} />
        </S.Filtros>
      </div>
    </S.Aside>
  );
};

export default BarraLateral;
