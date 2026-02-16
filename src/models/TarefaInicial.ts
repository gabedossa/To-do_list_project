import * as enums from '../utils/enum/Tarefas';

class TarefaInicial {
  id: number;
  titulo: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
  descricao: string;

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string
  ) {
    this.id = 0;
    this.titulo = titulo;
    this.prioridade = prioridade;
    this.status = status;
    this.descricao = descricao;
  }
}

export default TarefaInicial;
