// Seleciona todos os elementos que possuem a classe "organiza_menu-ramal" e armazena em uma variável chamada "botoes"
const botoes = document.getElementsByClassName('botao'); 
// Seleciona o elemento que possui o ID "estiliza_menu-ramal" e armazena em uma variável chamada "menu"
const menu = document.getElementById('seleciona_departamento'); 
const tabelas = document.querySelectorAll('.esconde-tabela');

let exibirTabela = false;

window.addEventListener('popstate', () => {
  //console.log(exibirTabela);

  tabelas.forEach(tabela => {

    if ( tabela.className === "mostra-tabela" && exibirTabela ){
      tabela.className = 'esconde-tabela';
      menu.style.display = 'flex'; 
      exibirTabela = false;
      return;
    }
        
  });
  
})



// Inicia um loop que irá percorrer todos os elementos armazenados na variável "botoes"
for (let i = 0; i < botoes.length; i++) { 

  const tabela = tabelas[i];

  // Adiciona um evento de clique no elemento atual do loop
  botoes[i].addEventListener('click', function() { 

    tabela.className = 'mostra-tabela';
    menu.style.display = 'none'; 
    setTimeout(() => exibirTabela = true, 10)
    
  });
}