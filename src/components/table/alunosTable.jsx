import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import { Edit } from '@mui/icons-material';

const AlunoTable = ({alunos}) =>{
    return (
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
                {alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.id}</td>
                        <td className='nome'>{aluno.nome}</td>
                        <td className='email'>{aluno.email}</td>
                        <td>{aluno.curso}</td>
                        <td>
                            <button className='error'><DeleteIcon style={{width: '20px'}}></DeleteIcon></button>
                            <button><Edit style={{width: '20px'}}></Edit></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AlunoTable