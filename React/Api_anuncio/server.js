// Importa o módulo express → ajuda o Node.js a criar servidores e APIs facilmente
const express = require("express");


// Importa o módulo cors → libera o acesso do React (ou outro front) para essa API
const cors = require("cors");


// Cria o app (nossa aplicação backend)
const app = express();

//usa o cors para liberar o acesso da API para o navegador
app.use(cors());

//Define a porta do servidor
const PORT = 3000;

//"Banco de dados" tempórario (apenas em memória)

let anuncios = [
    {id: 1, nome:"Curso de react",cliques:0,link:"https://encurtador.com.br/EJDj"},
    {id: 2, nome:"Curso de C#", cliques:0, link:"https://encurtador.com.br/EJDj/"},
    {id: 3, nome:"Curso de javascript", cliques:0, link:"https://encurtador.com.br/EJDj"}
];

/*
Rota -> 1 Mostrar todos os anúncios
- app.get cria uma porta do tipo GET
- req = pedido do navegador
- res = resposta do servidor

Lista todos os anúncios
-📍 GET http://localhost:3000/ads
*/

app.get("/ads", (req, res) =>{
    res.json(anuncios);
});


/*
Rota 2 -> Redirecionar e contar clique
1. Pega o ID da URL
2. Procura o anúncio no array
3. Soma +1 nos cliques
4. Redireciona o usuário para o link do curso

Acessar um link e contar o clique

📍 GET http://localhost:3000/redirect/:id

ele redireciona para o id do curso especifico, veja o /redirect/ caso troque para /ads/ ou /stats/ irá levar para uma caminho especifico
*/

app.get("/redirect/:id", (req, res) => {
    const id =parseInt(req.params.id)
    const anuncio = anuncios.find(a => a.id === id);

    if (!anuncio){
        return res.status(404).send("Anúncio não encontrado");
    }

    anuncio.cliques += 1;
    res.redirect(anuncio.link);
});


/*
Rota 3 -> Mostrar estatísticas
- Exibe só nome e número de cliques 
*/
app.get("/stats", (req, res) => {
    res.json(anuncios.map(a => ({nome:a.nome,cliques:a.cliques})))
})// No clique ele não deu erro de sintaxe e rodou o código tranquilamente sendo que é cliques e não clique

/*
Rota 4 -> Verificar um único anúncio pelo ID
📍 GET http://localhost:3000/ads/:id
*/
app.get("/ads/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const anuncio = anuncios.find(a => a.id === id)

    if (!anuncio){
        return res.status(404).send("Anúncio não encntrado")
    }
    res.json(anuncio);
})

/*
Rota 5 -> Reiniciar contadores

➡️ Zera todos os contadores de cliques (pode usar para testes)

*/
app.post("/reset", (req, res) => {
    anuncios.forEach(a => (a.cliques = 0));
    res.send("Todos os contadores foram reiniciados!")
});

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
});


/*
Verificar um único anúncio pelo ID
📍 GET http://localhost:3000/anuncios/:id <- 1, 2, ou 3
-Os id você verificar nas array que foi criada na linha 18
-Alterando o id no exemplo abaixo:
    - http://localhost:3000/anuncios/1
    - http://localhost:3000/anuncios/2
    - http://localhost:3000/anuncios/3
    Ira redirecionar para aos anúncios com seu respectivo ID
➡️ Retorna apenas um anúncio específico.
 */


/*
📍 URLs principais pra testar
Função	URL	Método
Ver todos os anúncios	http://localhost:3000/ads
	GET
Acessar um anúncio e contar clique	http://localhost:3000/redirect/1
	GET
Ver estatísticas (cliques)	http://localhost:3000/stats
	GET
Ver anúncio específico	http://localhost:3000/ads/1
	GET
Zerar cliques (opcional)	http://localhost:3000/reset
	POST
*/