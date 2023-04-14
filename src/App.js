import './App.css'
import Aluno from './components/Aluno'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'

function App() {
  const alunos = [
    { nome: 'gabriel', email: 'gabriel@email.com', curso: 'sistemas para internet', media: 9 },
    { nome: 'carlos', email: 'carlos@email.com', curso: 'medicina', media: 6 },
    { nome: 'lely', email: 'lely@email.com', curso: 'direito', media: 10 },
  ]
  
  return (
    <div className='App'>
      <EstouConseguindoAprenderReact
        estouConseguindo={true}
      ></EstouConseguindoAprenderReact>
      <hr />
      <h1>Alunos:</h1>
      <Aluno>
        {alunos.map((aluno) => (
          <>
            <div><strong>Nome:</strong>  {aluno.nome} </div>
            <div><strong>Email:</strong> {aluno.email} </div>
            <div><strong>Curso:</strong> {aluno.curso} </div>
            <div><strong>Media:</strong> {aluno.media} </div>
            <div><strong>Status:</strong> {aluno.media >= 7 ? 'Aprovado!' : 'Reprovado.'} </div>
            <hr />
          </>
        ))}
      </Aluno>
    </div>
  )
}

export default App
