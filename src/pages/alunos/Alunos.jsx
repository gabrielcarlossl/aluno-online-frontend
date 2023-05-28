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

    return (
        <div className='alunoContainer'>

            <h1>Alunos</h1>

            <div className='container'>

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

                <form onSubmit={handleSubmit}>
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
            </div>
        </div>
    )
}

export default Alunos
