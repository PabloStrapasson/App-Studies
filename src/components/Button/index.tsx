import React, { PropsWithChildren } from "react";
import style from './button.module.scss'

interface Props{
    onClick?: () => void,
    type?:"button" | "submit" | "reset" | undefined,
    children?: React.ReactNode
}

export default function Button({ onClick, type, children }: Props){
    return(
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}