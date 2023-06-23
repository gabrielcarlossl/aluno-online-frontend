import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { EndpointSpringBase } from '../../utils/conts'
import axios from 'axios'

const Disciplinas = () => {
  
    const [disciplinaData, setDisciplinaData] = useState([])
    const [nome, setNome] = useState('')
    const [idProfessor, setIdProfessor] = useState()


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${EndpointSpringBase}/disciplina/all`)

            const data = await res.json()
            setDisciplinaData(data)

        }
        fetchData()
    }, [])



    const serviceDelete = async (idProfessor) => {
        try {
          await axios.delete(`${EndpointSpringBase}/disciplina/${idProfessor}`);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        } catch (error) {
            console.error("Erro ao excluir o item: ", error)
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addDisciplina = {
            nome,
            professor:{
                id: idProfessor
            }
        }
        const response = await fetch(`${EndpointSpringBase}/disciplina`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addDisciplina)
        })

        const addedDisciplina = await response.json()

        setDisciplinaData((prevDisciplina) => [...prevDisciplina, addedDisciplina])
        setNome()
        setIdProfessor()
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (
        <div className='alunoContainer'>

            <h1>Disciplinas</h1>

            <div className='container'>

                <table cellSpacing={5}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Professor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinaData.map((disciplina) => (
                            <tr key={disciplina.id}>
                                <td>{disciplina.id}</td>
                                <td className='nome'>{disciplina.nome}</td>
                                <td className='email'>{disciplina.professor?.nome}</td>
                                <td><button onClick={() => serviceDelete(disciplina.id)} className='error'><DeleteIcon></DeleteIcon></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <form onSubmit={handleSubmit}>
                    <h3>Cadastrar Disciplinas</h3>
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                            placeholder='Digite o nome da disciplina'
                        />
                    </label>
                    <br />
                    <label>
                        Id do Professor:
                        <input
                            placeholder='Digite o id do professor'
                            required
                            type="number"
                            value={idProfessor}
                            onChange={(event) => setIdProfessor(event.target.value)}
                        />
                    </label>
                    <br />
                    <button className='enviar' type="submit">Enviar</button>
                </form>
            </div>
        </div>
  )
}

export default Disciplinas
