// Importa React e hooks
import React, { useEffect, useState } from "react";

// Componente ProcuradosOneP
function ProcuradosOneP() {
  // Estado que guarda os personagens
  const [personagens, setPersonagens] = useState([]);
  // Estado que indica se está carregando
  const [carregando, setCarregando] = useState(true);

  // useEffect roda quando o componente é montado
  useEffect(() => {
    // Função async para buscar os dados
    const fetchPersonagens = async () => {
      try {
        const res = await fetch("https://api.api-onepiece.com/v2/characters/en");
        const dados = await res.json();

        console.log("🧩 Dados da API:", dados[0].fruit.name); // Mostra os dados no console

        // Atualiza estado com os dados
        // ⚡ A API retorna um array direto
        setPersonagens(dados);

      } catch (erro) {
        console.error("Erro ao buscar personagens:", erro);
      } finally {
        setCarregando(false); // Para indicador de carregamento
      }
    };

    fetchPersonagens();
  }, []);

  // Renderização
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🏴‍☠️ Procurados de One Piece</h2>

      {carregando ? (
        <p>Carregando personagens...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {Array.isArray(personagens) &&
            personagens.slice(0, 10).map((p) => (
              <div
                key={p.id}
                style={{
                  border: "2px solid #b8860b",
                  borderRadius: "10px",
                  backgroundColor: "#a58c26ff",
                  padding: "10px",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                {/* Imagem do personagem */}
                <img
                  // ⚡ Usa "img" da API; se não existir, usa placeholder
                  src={p.img || "https://via.placeholder.com/200"}
                  alt={p.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />

                {/* Nome do personagem */}
                <h3 style={{ margin: "10px 0" }}>{p.name}</h3>

                {/* Recompensa */}
                <p>Recompensa: 💰 {p.bounty || "Desconhecida"}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// Exporta o componente
export default ProcuradosOneP;
