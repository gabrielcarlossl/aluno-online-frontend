import React, { useEffect, useState } from 'react'
import './aluno.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { EndPointBackEndAluno, EndpointSpringBase } from '../../constants/conts';



const Alunos = () => {

    const [alunosData, setAlunosData] = useState([])
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")
    const [idAluno, setIdAluno] = useState()
    const [idDisciplina, setIdDisciplina] = useState()
    const [idMatricula, setIdMatricula] = useState()


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${EndpointSpringBase}/aluno/all`)

            const data = await res.json()
            setAlunosData(data)

        }
        fetchData()
    }, [])



    const serviceDelete = async (id) => {
        try {
            await axios.delete(`${EndPointBackEndAluno}/${id}`);
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        } catch (error) {
            alert("Não é possível remover aluno que está matriculado.")
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addAluno = {
            nome,
            email,
            curso
        }
        const response = await fetch(EndPointBackEndAluno, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addAluno)
        })

        const addedAlunos = await response.json()

        setAlunosData((prevAlunos) => [...prevAlunos, addedAlunos])
        setNome('')
        setEmail('')
        setCurso('')
    }

    // status muda de matriculado para trancado
    const handleSubmitTrancar = async (event) => {
        event.preventDefault();
        const response = await fetch(`${EndpointSpringBase}/matricula-aluno/atualiza-status/${idMatricula}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
        })
        alert('Matricula Trancada')
        const addedStatus = await response.json()

    }

    // cria matricula em uma disciplina
    const handleSubmitMatricular = async (event) => {
        event.preventDefault()
        const addMatricula = {
            aluno: {
                id: idAluno
            },
            disciplina: {
                id: idDisciplina
            }
        }
        const response = await fetch(`${EndpointSpringBase}/matricula-aluno`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addMatricula)
        })
        const addedMatricula = await response.json()
        alert('Matrícula realizada com Sucesso!')

    }


    return (
        <div className='alunoContainer'>

            <h1>Alunos</h1>

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} className='container'>

                <table cellSpacing={5}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Curso</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosData.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td className='nome'>{aluno.nome}</td>
                                <td className='email'>{aluno.email}</td>
                                <td>{aluno.curso}</td>
                                <td><button onClick={() => serviceDelete(aluno.id)} className='error'><DeleteIcon></DeleteIcon></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{display: 'flex'}}>
                    <form onSubmit={handleSubmit}>
                        <h3>Cadastrar Alunos</h3>
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                                placeholder='Digite o nome do aluno'
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                placeholder='Digite o email do aluno'
                                required
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Curso:
                            <input
                                placeholder='Digite o curso do aluno'
                                type="text"
                                value={curso}
                                onChange={(event) => setCurso(event.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <button className='enviar' type="submit">Enviar</button>
                    </form>

                    <form onSubmit={handleSubmitMatricular}>
                        <h3>Realizar Matrícula em uma Disciplina</h3>
                        <label>
                            Id do Aluno:
                            <input
                                type="number"
                                value={idAluno}
                                onChange={(event) => setIdAluno(event.target.value)}
                                required
                                placeholder='Digite o id do aluno'
                            />
                        </label>
                        <br />
                        <label>
                            Id da Disciplina:
                            <input
                                type="number"
                                value={idDisciplina}
                                onChange={(event) => setIdDisciplina(event.target.value)}
                                required
                                placeholder='Digite o id da disciplina'
                            />
                        </label>
                        <br />
                        <button className='enviar' type="submit">Enviar</button>
                    </form>
                    <form onSubmit={handleSubmitTrancar}>
                        <h3>Trancar Matrícula</h3>
                        <label>
                            Id da Matrícula:
                            <input
                                type="number"
                                value={idMatricula}
                                onChange={(event) => setIdMatricula(event.target.value)}
                                required
                                placeholder='Digite o id da matricula'
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

export default Alunos
