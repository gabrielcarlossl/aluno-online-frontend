import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { EndpointSpringBase } from '../../constants/conts';



const Professores = () => {

    const [professorData, setProfessorData] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${EndpointSpringBase}/professor/all`)

            const data = await res.json()
            setProfessorData(data)

        }
        fetchData()
    }, [])



    const serviceDelete = async (id) => {
        try {
          await axios.delete(`${EndpointSpringBase}/professor/${id}`);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        } catch (error) {
            alert("Não é possível remover professor que dá aula para alguma disciplina.\n \n Remova primeiro a disciplina que ele da aula, na tela Disciplinas.")
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addProfessor = {
            nome,
            email
        }
        const response = await fetch(`${EndpointSpringBase}/professor`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addProfessor)
        })

        const addedProfessor = await response.json()

        setProfessorData((prevProfessor) => [...prevProfessor, addedProfessor])
        setNome('')
        setEmail('')
    }

    return (
        <div className='alunoContainer'>

            <h1>Professores</h1>

            <div className='container'>

                <table cellSpacing={5}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professorData.map((professor) => (
                            <tr key={professor.id}>
                                <td>{professor.id}</td>
                                <td className='nome'>{professor.nome}</td>
                                <td className='email'>{professor.email}</td>
                                <td><button onClick={() => serviceDelete(professor.id)} className='error'><DeleteIcon></DeleteIcon></button></td>
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
                            placeholder='Digite o nome do professor'
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            placeholder='Digite o email do professor'
                            required
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                    <br />
                    <button className='enviar' type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Professores
