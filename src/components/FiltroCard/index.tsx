import * as S from './styles';
import * as enums from '../../utils/enum/Tarefas';

type Props = {
  legenda: string;
  contador: number;
  tipo?: 'status' | 'prioridade' | 'todas';
  valor?: enums.Status | enums.Prioridade | null;
  ativo?: boolean;
};

const FiltroCard = ({
  legenda,
  contador,
  tipo,
  valor,
  ativo = false,
}: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Legenda>{legenda}</S.Legenda>
      <S.Contador>{contador}</S.Contador>
    </S.Card>
  );
};

export default FiltroCard;
