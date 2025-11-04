import { useEffect, useState } from "react"

const URL = ("http://localhost:3000/ads")

function Anuncio(){
    const [lista, setLista] = useState("")


    useEffect(() =>{
     const  buscar_anuncio = async () => {
        const res = await fetch(URL)
        const data = res.json()
        setLista(data)
     }
     buscar_anuncio()
    },[])


    return(
        <di>
            <h1>Lista de anuncios</h1>
            
        </di>
    )
}

export default Anuncio;