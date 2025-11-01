import {useState} from "react";


function Contador(){
    const  [cont, setCont] = useState(0)

        function AtualizarContado(){

             setCont(cont + 50)
             
        }
        function DiminuirContador(){
            setCont(cont - 50)
        }

        return(
            <div>

                <h1>Estamos criando um Contador</h1>
                    <h2>Atualizando o contador:{cont}</h2>
               
                {/* utilizando arrow function(função anônima) */}
                {/* <button onClick = { () => AtualizarContado() } >Aumentar</button>
                <button onClick = {() => DiminuirContador()}> Diminuir</button> */}

                {/*
                    🧠 Diferença entre as formas de usar onClick:

                    Versão                         | Forma                         | O que acontece
                    -------------------------------|--------------------------------|-----------------------------------------------
                    onClick={() => funcao()}       | Arrow function (função anônima) | Cria uma função nova que chama funcao()
                    onClick={funcao}               | Referência direta               | React executa funcao quando o botão é clicado
*/}


                {/* Utilizando apenas a função e retirando a função anônima e os parênteses  ()*/}
                <button onClick = { AtualizarContado } >Aumentar</button>
                <button onClick = {DiminuirContador}> Diminuir</button>
            </div>

        )
    }
    
    export default Contador;

//Maneira 2 de fazer 
// function Contador(){
//     const  [cont, setCont] = useState(0)

//        
//             const Atualizar = () => setCont (cont + 1 )
//         return(
//             <div>

//                 <h1>Estamos criando um Contador</h1>
//                     <h2>Atualizando o contador:{cont}</h2>
//                 <button onClick = { ( Atualizar) } >Atualizar</button>
//             </div>

//         )


// }
// export default Contador;

// Jeito 3 de usar o contador
// function Contador(){
//     const  [cont, setCont] = useState(0)

        
            
//         return(
//             <div>

//                 <h1>Estamos criando um Contador</h1>
//                     <h2>Atualizando o contador:{cont}</h2>
//                 <button onClick = {  () => setCont(cont + 1)} >Atualizar</button>
//             </div>

//         )


// }
// export default Contador;