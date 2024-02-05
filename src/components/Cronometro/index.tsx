import { useState, useEffect } from 'react'
import { timeToSecond } from '../../common/utils/time'
import { ITarefas } from '../../types/tarefa'
import Button from '../Button'
import Clock from './clock'
import style from './timer.module.scss'

interface Props{
  selecionado: ITarefas | undefined,
  finalizarTarefa: () => void
}

export default function Timer({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>()
  
  useEffect(()=>{
    if(selecionado?.tempo){
      setTempo(timeToSecond(selecionado.tempo))
    }
  }, [selecionado])

  function countdown(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1)
        return countdown(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Clock tempo={tempo}/>
        </div>
        <Button onClick={()=>{ countdown(tempo) }}>Começar</Button>
    </div>
  )
}
