import { useEffect, useState } from "react";

const URL = "https://api.api-onepiece.com/v2/characters/en";

function OnePiece() {
  const [personagens, setPersonagens] = useState([]);

  // Estilos aplicados direto no componente
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  };

  const cartaStyle = {
    width: "18%", // Até 5 cartas por linha
    border: "1px solid #df1717ff",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    backgroundColor: "#dbcd0aff",
  };

  useEffect(() => {
    const buscarPersonagens = async () => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setPersonagens(data);
      } catch (err) {
        console.error("Erro ao buscar API", err);
      }
    };

    buscarPersonagens();
  }, []);

  return (
    <div>
      <h1>Personagens de One Piece</h1>
      <div style={containerStyle}>
        {personagens.slice(0, 10).map((p) => (
          <div style={cartaStyle} key={p.id}>
            <h2> {p.name}</h2>
            <h3>Idade: {p.age}</h3>
            <h3>Bounty: {p.bounty}</h3>
            <img src={p.img} alt={p.name} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnePiece;
