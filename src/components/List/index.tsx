import style from './list.module.scss'
import Item from './item'
import { ITarefas } from '../../types/tarefa'

interface Props{
  tarefas: ITarefas[],
  selecionaTarefa: (tarefaSeleciona: ITarefas) => void
}

export default function List({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
        {tarefas.map((item) => (
            <Item selecionaTarefa={selecionaTarefa}
                  key={item.id} 
                  {...item}/>
        ))}
        </ul>
    </aside>
  )
}
