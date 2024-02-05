import React, { Component, useState } from 'react'
import Button from '../Button'
import style from './form.module.scss'
import { ITarefas } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export default function Forms({setTarefas}: Props){

  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault()
    setTarefas(tarefasAntigas => 
                            [...tarefasAntigas, 
                              {
                                tarefa,
                                tempo,
                                selecionado: false,
                                completado: false,
                                id: uuidv4()
                              }
                            ])
                            setTarefa("")
                            setTempo("00:00")
  }

  return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa"> Adicione um novo estudo </label>
            <input type="text" 
                   name="tarefa" 
                   id="tarefa"
                   value={tarefa}
                   onChange={evento => setTarefa(evento.target.value)} 
                   placeholder="O que você quer estudar?" 
                   required/>
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa"> Tempo </label>
            <input type="time" 
                   step="1" 
                   name="tempo" 
                   value={tempo} 
                   onChange={evento => setTempo(evento.target.value)}
                   id="tmpo" 
                   min="00:00:00" 
                   max="03:30:00" 
                   required/>
        </div>
        <Button type='submit'>Adicionar</Button>
      </form>
  )
}
