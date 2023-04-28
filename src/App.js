import './App.css'
import Campanha from './components/Campanha'
import ComponenteTexto from './components/ComponenteTexto'
import CssInline from './components/CssInline'
import FormularioDeContato from './components/FormularioDeContato'


function App() {
  
  
  return (
    <div className='App'>
      <ComponenteTexto></ComponenteTexto>
      <CssInline></CssInline>
      <Campanha mes='Outubro'></Campanha>
      <FormularioDeContato></FormularioDeContato>
    </div>
  )
}

export default App
