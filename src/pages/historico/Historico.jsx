import React, { useEffect, useState } from 'react'
import { EndpointSpringBase } from '../../constants/conts'
import './historico.module.css'

const Historico = () => {
    const [historicoData, setHistoricoData] = useState([])
    const [id, setId] = useState()


    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${EndpointSpringBase}/matricula-aluno/historico-aluno/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const addedHistorico = await response.json()

        setHistoricoData((prevHistorico) => [...prevHistorico, addedHistorico])
        setId()
    }

    const renderizarLinhas = (disciplinas) => {
        return disciplinas.map((disciplina, index) => (
            <tr key={index}>
                {console.log(disciplina)}
                <td>{disciplina.nomeAluno}</td>
                <td>{disciplina.cursoAluno}</td>
                <td>{disciplina.nomeDisciplina}</td>
                <td>{disciplina.professorDisciplina}</td>
                <td>{disciplina.nota1}</td>
                <td>{disciplina.nota2}</td>
                <td>{disciplina.media}</td>
                <td>{disciplina.status}</td>
            </tr>
        ));
    };


    return (
        <div>
            <div className='container'>

                <h1>Histórico do Aluno</h1>

                <div className='historicoContainer'>

                    {<table cellSpacing={5}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Disciplina</th>
                                <th>Professor</th>
                                <th>Primeria nota</th>
                                <th>Segunda nota</th>
                                <th>Média</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoData.map((historico) => (
                                <>
                                    <tr key={historico.disciplinasAlunoList.length}>
                                        {console.log(historico)}
                                        <td>{historico.nomeAluno}</td>
                                        <td>{historico.cursoAluno}</td>
                                        <td>{historico.disciplinasAlunoList[0].nomeDisciplina}</td>
                                        <td>{historico.disciplinasAlunoList[0].professorDisciplina}</td>
                                        <td>{historico.disciplinasAlunoList[0].nota1}</td>
                                        <td>{historico.disciplinasAlunoList[0].nota2}</td>
                                        <td>{historico.disciplinasAlunoList[0].media}</td>
                                        <td>{historico.disciplinasAlunoList[0].status}</td>
                                    </tr>
                                    {renderizarLinhas(historico.disciplinasAlunoList.slice(1))}
                                </>
                            ))}
                        </tbody>
                    </table>}

                    <form onSubmit={handleSubmit}>
                        <h3>Digite o id do aluno para receber o histórico</h3>
                        <label>
                            Id:
                            <input
                                placeholder='Digite o id do aluno'
                                required
                                type="number"
                                value={id}
                                onChange={(event) => setId(event.target.value)}
                            />
                        </label>
                        <br />
                        <button className='enviar' type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Historico
