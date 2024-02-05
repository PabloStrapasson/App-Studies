import style from './clock.module.scss'

interface Props{
  tempo: number | undefined
}

export default function Clock({tempo = 0}: Props) {
  
  const minutes = Math.floor(tempo / 60)
  const seconds = tempo % 60
  const [minute_ten, minute_unit] = String(minutes).padStart(2, '0')
  const [second_ten, second_unit] = String(seconds).padStart(2, '0')
  
  return (
    <>
        <span className={style.relogioNumero}>{minute_ten}</span>
        <span className={style.relogioNumero}>{minute_unit}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{second_ten}</span>
        <span className={style.relogioNumero}>{second_unit}</span>
    </>
  )
}
