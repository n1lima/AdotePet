// Importando o array de dados do módulo './dados.js'
import { dados } from "./dados.js";

// Expondo a função ao escopo global para que ela possa ser acessada a partir do HTML
window.pesquisar = function () {
  // Selecionando a seção do HTML onde os resultados serão exibidos
  let section = document.querySelector("section#resultados-pesquisa");

  //Pegando o valor que está sendo inserindo dentro da tag
  let campoPesquisa = document.querySelector("input#campo-pesquisa").value;

  // Verificando se o campo de pesquisa está vazio ou contém apenas espaços
  if (campoPesquisa === "") {
    return alert('[ERRO] Digite algo antes de clicar em "Pesquisar"');
  }else if(campoPesquisa === "  "){
    return alert('[ERRO] Você apenas colocou espaço! Digite algo antes de clicar em "Pesquisar"');
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Limpando o conteúdo da seção para remover resultados antigos
  section.innerHTML = "";

  // Inicializando uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = ""
  let descricao = ""
  let tags = ""

  // Iterando sobre cada item no array de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
      // Concatenando o HTML para cada item, incluindo título e descrição
      resultados += ` 
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
          ${
            dado.linkImagem
              ? `<img src="img/${dado.linkImagem}" alt="${dado.nome}">`
              : ""
          } <h3>${dado.nome}</h3>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>`;
  }
}

  if (!resultados) {
    alert("[ERRO]Nada foi encontrado");
  }

  // Atualizando o conteúdo HTML da seção com os resultados gerados
  section.innerHTML += resultados;
};
