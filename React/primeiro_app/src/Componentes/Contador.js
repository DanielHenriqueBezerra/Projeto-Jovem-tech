import {useState} from "react";


// function Contador(){
//     const  [cont, setCont] = useState(0)

//         function AtualizarContado(){

//              setCont(cont + 1)
             
//         }

//         return(
//             <div>

//                 <h1>Estamos criando um Contador</h1>
//                     <h2>Atualizando o contador:{cont}</h2>
//                 <button onClick = { () => AtualizarContado() } >Atualizar</button>
//             </div>

//         )


// }
// export default Contador;

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
function Contador(){
    const  [cont, setCont] = useState(0)

        
            
        return(
            <div>

                <h1>Estamos criando um Contador</h1>
                    <h2>Atualizando o contador:{cont}</h2>
                <button onClick = {  () => setCont(cont + 1)} >Atualizar</button>
            </div>

        )


}
export default Contador;