// services/api.js

// A função consultarProduto vai receber o código de barras digitado pelo usuário
// e buscar as informações do produto em uma API pública chamada OpenFoodFacts.

async function consultarProduto(codigo) {
  try {
    // 1️⃣ Monta o endereço da API usando o código recebido.
    // A API usa esse formato: https://world.openfoodfacts.org/api/v0/product/{codigo}.json
    const url = `https://world.openfoodfacts.org/api/v0/product/${codigo}.json`;

    // 2️⃣ Faz a requisição HTTP usando fetch()
    const resposta = await fetch(url);

    // 3️⃣ Converte a resposta para JSON
    const dados = await resposta.json();

    // 4️⃣ Verifica se a API encontrou o produto
    if (!dados.product) {
      throw new Error("Produto não encontrado");
    }

    // 5️⃣ Retorna apenas as informações que interessam
    return {
      nome: dados.product.product_name || "Nome não disponível",
      marca: dados.product.brands || "Marca não informada",
      descricao: dados.product.generic_name || "Sem descrição",
      imagem: dados.product.image_url || "",
      preco: "Consultar valor na loja" // (essa API não traz preço)
    };

  } catch (erro) {
    console.error("Erro na função consultarProduto:", erro);
    throw erro; // Repassa o erro para o App.js tratar
  }
}

// 6️⃣ Exporta a função para poder ser usada no App.js
export default consultarProduto;
