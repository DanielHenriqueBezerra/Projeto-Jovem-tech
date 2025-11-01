import { useEffect, useState } from "react";
import Compo from "./Componentes/Compo";
import Contador from "./Componentes/Contador";



function App() {


  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")

  function AtualizarCurso() {

    const DigiteCurso = prompt("Digite seu curso:")
    setCurso(DigiteCurso)
  }

  useEffect(() => {
    AtualizarCurso()
  }, [])



    function AtualizarNome() {

      const Novonome = prompt("Digite o nome do aluno:")
      setNome(Novonome)

    }
  




  return (
    <div>
      <h1>Sexta-feira </h1>
      <h3>Esse é: {curso}</h3>
      <h3>Nome do aluno: {nome}</h3>
      <button onClick={() => AtualizarCurso()} >Digite</button>
      <button onClick={() => AtualizarNome()}>Mudar nome do aluno</button>


      <Contador />
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