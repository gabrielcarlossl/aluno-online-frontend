import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alunos from './pages/alunos/Alunos'
import Menu from './components/navbar/Menu'
import Home from './pages/home/Home.jsx'
import Professores from './pages/professor/Professores'
import Disciplinas from './pages/disciplina/Disciplinas'
import Historico from './pages/historico/Historico'


function App() {
  
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/alunos' element={<Alunos></Alunos>}></Route>
          <Route path='/professores' element={<Professores></Professores>}></Route>
          <Route path='/disciplinas' element={<Disciplinas></Disciplinas>}></Route>
          <Route path='/historico' element={<Historico></Historico>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
