import logo from './google.png';
import './App.css';
import Jovemtech from './Componentes/jovemtech';
import Meu_nome from './Componentes/meu_nome';
import Relogio from './Componentes/Relogio';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Jovemtech nome="Microsoft" idade ="27"  />
        <Meu_nome nome="Seja livre em um mundo perdido" />
        <Relogio />
      </header>
    </div>
  );
}


 export default App;