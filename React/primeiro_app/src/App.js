import { useEffect, useState } from "react";
import Compo from "./Componentes/Compo";

function App() {
  
  const [curso, setCurso] = useState("")

  function AtualizarCurso(){

    const DigiteCurso = prompt("Digite seu curso:")
    setCurso(DigiteCurso)
  }

  useEffect(() => {
    AtualizarCurso()
  },[])
  return (
    <div>
      <h1>Sexta-feira </h1>
      <h3>Esse é: {curso}</h3>
        
        <button onClick = {() => AtualizarCurso()} >Digite</button>
      
      
      <Compo />
      <Usar />
    </div>
  );
}

export default App;

function Usar() {
  return (
    
      <h4>Estou usando o componente Usar</h4>
    
  );
}