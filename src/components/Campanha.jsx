import React from 'react'

import style from './Campanha.module.css'

const Campanha = ({ mes }) => {

    let background
    let mensagem
    switch (mes) {
        case 'Setembro':
            background = style.setembro
            mensagem = 'Prevenção ao suicídio'
            break;
        case 'Outubro':
            background = style.outubro
            mensagem = 'Conscientização sobre o câncer de mama'
            break;
        case 'Novembro':
            background = style.novembro
            mensagem = 'Conscientização sobre o câncer prostata'
            break
        default:
            background = style.naoTem
            mensagem = 'Não tem nada esse mês'
            break;
    }

    return (
        <div>
            <p className={background}>{mensagem}</p>
        </div>
    )
}

export default Campanha
