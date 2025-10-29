import logo from './google.png';
import './App.css';
import Jovemtech from './Componentes/jovemtech';
import Meunome from './Componentes/meunome';
import Relogio from './Componentes/Relogio';
import ProcuradosOneP from './Componentes/ProcuradosOneP';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Jovemtech nome="Microsoft" idade ="27"  />
        <Meunome nome="Seja livre em um mundo perdido" />
        <Relogio />
        <ProcuradosOneP/>
      </header>
    </div>
  );
}


 export default App;