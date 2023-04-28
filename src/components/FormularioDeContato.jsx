import React, { useState } from 'react'
import './FormularioDeContato.css'

const FormularioDeContato = () => {

    const [nome, setNome] = useState()
    const [numero, setNumero] = useState()
    const [mensagem, setMensagem] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {
            nome,
            numero,
            mensagem
        }

        const dadosJSON = JSON.stringify(dados)
        console.log(dadosJSON)
    }
    const handleName = (e) => {
        setNome(e.target.value)
    }
    const handleNumero = (e) => {
        setNumero(e.target.value)
    }
    const handleMensagem = (e) => {
        setMensagem(e.target.value)
    }


    return (
        <div>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: 
                    <input type="text" name='nome' value={nome} onChange={handleName} />
                </label>
                <label htmlFor="numero">Número:
                    <input type="number" name='numero' value={numero} onChange={handleNumero} />
                </label>
                <label htmlFor="mensagem">Mensagem:
                    <input type="text" name='mensagem' value={mensagem} onChange={handleMensagem} />
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormularioDeContato
