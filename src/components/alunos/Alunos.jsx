import React, { useEffect, useState } from 'react'
import './aluno.css'

const EndPointBackEndSpring = 'http://localhost:8080/aluno'
const EndpointSpringBase = 'http://localhost:8080'

const Alunos = () => {

    const [alunosData, setAlunosData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${EndpointSpringBase}/aluno/all`)

            const data = await res.json()
            setAlunosData(data)

        }
        fetchData()
    }, []);


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addAluno = {
            nome,
            email,
            curso
        }
        const response = await fetch(EndPointBackEndSpring, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addAluno)
        })

        const addedAlunos = await response.json()

        setAlunosData((prevAlunos) => [...prevAlunos, addedAlunos])
        setNome('')
        setEmail('')
        setCurso('')
    };

    return (
        <div>

            <h1>Alunos</h1>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosData.map((aluno) => (
                        <tr key={aluno.id}>
                            <td className='nome'>{aluno.nome}</td>
                            <td className='email'>{aluno.email}</td>
                            <td>{aluno.curso}</td>
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
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Curso:
                    <input
                        type="text"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Alunos
