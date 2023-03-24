// Seleciona todos os elementos que possuem a classe "organiza_menu-ramal" e armazena em uma variável chamada "botoes"
const botoes = document.getElementsByClassName('organiza_menu-ramal'); 
// Seleciona todos os elementos que possuem a classe "ramal-section" e armazena em uma variável chamada "secoes"
const secoes = document.getElementsByClassName('ramal-section'); 
// Seleciona o elemento que possui o ID "estiliza_menu-ramal" e armazena em uma variável chamada "menu"
const menu = document.getElementById('estiliza_menu-ramal'); 

// Inicia um loop que irá percorrer todos os elementos armazenados na variável "botoes"
for (let i = 0; i < botoes.length; i++) { 
  // Armazena o elemento atual do loop em uma variável chamada "botao"
  const botao = botoes[i]; 
  // Adiciona um evento de clique no elemento atual do loop
  botao.addEventListener('click', function() { 
    // Seleciona a seção que deve ser exibida com base no atributo "href" do elemento clicado
    const secaoSelecionada = document.querySelector(this.getAttribute('href')); 
    // Inicia outro loop que irá percorrer todos os elementos armazenados na variável "secoes"
    for (let j = 0; j < secoes.length; j++) { 
       // Armazena o elemento atual do loop em uma variável chamada "secao"
      const secao = secoes[j];
      // Verifica se o elemento atual do loop é igual à seção selecionada
      if (secao == secaoSelecionada) { 
        // Inicia mais um loop que irá percorrer todos os elementos filhos da seção selecionada
        for (let k = 0; k < secao.children.length; k++) { 
          // Armazena o elemento filho atual do loop em uma variável chamada "filho"
          const filho = secao.children[k]; 
          // Define o estilo "display" do elemento filho como "block" para exibi-lo
          filho.style.display = 'block'; 
        }
        // Caso contrário (ou seja, se o elemento atual do loop não for igual à seção selecionada)
      } else { 
        // Define o estilo "display" do elemento como "none" para ocultá-lo
        secao.style.display = 'none'; 
        // Define o estilo "display" do menu como "none" para ocultá-lo
        menu.style.display = 'none'; 
      }
    }
  });
}
