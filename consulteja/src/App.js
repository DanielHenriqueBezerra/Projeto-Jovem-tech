import './App.css';
import { useState } from 'react';

function App() {
  // Estado que guarda o código de barras digitado
  const [codigo, setCodigo] = useState("");

  // Estado que guarda as informações do produto retornado da API
  const [produto, setProduto] = useState(null);

  // Estado que indica se está carregando
  const [loading, setLoading] = useState(false);

  // Função que faz a busca na API
  async function Consultar() {
    // Ativa o estado de carregamento
    setLoading(true);
    setProduto(null); // limpa produto anterior

    try {
      // Faz a requisição para a API OpenFoodFacts com o código digitado
      const resposta = await fetch(`https://world.openfoodfacts.org/api/v0/product/${codigo}.json`);
      const data = await resposta.json();

      // Verifica se o produto foi encontrado
      if (data.status === 1) {
        const produtoEncontrado = data.product;

        // Armazena as informações importantes no estado
        setProduto({
          nome: produtoEncontrado.product_name || "Nome não disponível",
          imagem: produtoEncontrado.image_front_url || "https://via.placeholder.com/200x200?text=Sem+Imagem",
          preco: (Math.random() * 20 + 5).toFixed(2) // preço simulado entre R$5 e R$25
        });
      } else {
        alert("Produto não encontrado! Verifique o código de barras.");
      }
    } catch (erro) {
      console.error("Erro ao consultar o produto:", erro);
      alert("Ocorreu um erro na consulta. Tente novamente.");
    } finally {
      // Desativa o carregamento
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ConsulteJá 🛒</h1>

        {/* Campo de entrada para digitar o código */}
        <input
          type="text"
          placeholder="Digite o código de barras"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        {/* Botão que dispara a função Consultar */}
        <button onClick={Consultar} disabled={loading || !codigo}>
          {loading ? "Consultando..." : "Consultar"}
        </button>

        {/* Se estiver carregando, mostra o loader */}
        {loading && <div className="loader"></div>}

        {/* Se o produto foi encontrado, mostra o card */}
        {produto && (
          <div className="card">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h2>{produto.nome}</h2>
            <p>💲Preço estimado: <strong>R$ {produto.preco}</strong></p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
