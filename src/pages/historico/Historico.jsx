import React, { useState } from 'react';
import { EndpointSpringBase } from '../../constants/conts';
import './historico.module.css';

const Historico = () => {
  const [historicoData, setHistoricoData] = useState([]);
  const [id, setId] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${EndpointSpringBase}/matricula-aluno/historico-aluno/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const addedHistorico = await response.json();

    if (addedHistorico.error) {
      setErro('Aluno não matriculado');
      setHistoricoData([]);
    } else {
      setErro('');
      setHistoricoData((prevHistorico) => [...prevHistorico, addedHistorico]);
    }
    setId('');
  };

  const renderizarLinhas = (disciplinas) => {
    console.log('disciplinas', disciplinas);
    return disciplinas.map((disciplina, index) => (
      <tr key={index}>
        <td>
          {historicoData[0]?.error === 'Not Found' ? 'Sem dados' : historicoData[0]?.nomeAluno}
        </td>
        <td>
          {historicoData[0]?.error === 'Not Found' ? 'Sem dados' : historicoData[0]?.cursoAluno}
        </td>
        <td>{disciplina.nomeDisciplina === null ? 'Sem dados' : disciplina.professorDisciplina}</td>
        <td>{disciplina.professorDisciplina === null ? 'Sem dados' : disciplina.professorDisciplina}</td>
        <td>{disciplina.nota1 === null ? 'Sem nota' : disciplina.nota1}</td>
        <td>{disciplina.nota2 === null ? 'Sem nota' : disciplina.nota2}</td>
        <td>{disciplina.media === null ? 'Sem média' : disciplina.media}</td>
        <td>{disciplina.status === null ? 'Sem média' : disciplina.status}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="container">
        <h1>Histórico do Aluno</h1>
        <div className="historicoContainer">
          {historicoData.length > 0 && (
            <table cellSpacing={5}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Curso</th>
                  <th>Disciplina</th>
                  <th>Professor</th>
                  <th>Primeira nota</th>
                  <th>Segunda nota</th>
                  <th>Média</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {historicoData.map((historico) => (
                  <>
                    <tr key={historico.disciplinasAlunoList.length}>
                      <td>{historico.nomeAluno === null ? 'sem dados' : historico.nomeAluno}</td>
                      <td>{historico.cursoAluno === null ? 'sem dados' : historico.cursoAluno}</td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.nomeDisciplina}
                      </td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.professorDisciplina}
                      </td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.nota1}
                      </td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.nota2}
                      </td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.media}
                      </td>
                      <td>
                        {historico.disciplinasAlunoList[0]?.error === 'Not Found'
                          ? 'Sem dados'
                          : historico.disciplinasAlunoList[0]?.status}
                      </td>
                    </tr>
                    {historico ? renderizarLinhas(historico.disciplinasAlunoList.slice(1)) : ''}
                  </>
                ))}
              </tbody>
            </table>
          )}
          <form onSubmit={handleSubmit}>
            <h3>Digite o ID do aluno para receber o histórico</h3>
            <label>
              Id:
              <input
                placeholder="Digite o ID do aluno"
                required
                type="number"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </label>
            <br />
            <button className="enviar" type="submit">
              Enviar
            </button>
            {erro && <p style={{border:'1px solid black', backgroundColor: 'red', width: 'fit-content', padding: '15px', borderRadius: 8, fontSize: '16px', fontWeight: 600}}>{erro}</p>}

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Historico;
