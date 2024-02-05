import React, { useState } from 'react';
import Forms from '../components/Form'
import List from '../components/List'
import style from './App.module.scss'
import Timer from '../components/Cronometro';
import { ITarefas } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}/>
      <Timer 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
