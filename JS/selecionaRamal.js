const opcoesRamal = document.querySelectorAll('.organiza_menu-ramal');
const ramalSections = document.querySelectorAll('.ramal-section');
const menu = document.getElementById('estiliza_menu-ramal');

opcoesRamal.forEach(opcao => {
  opcao.addEventListener('click', () => {
    // Oculta o menu
    menu.style.display = 'none';

    // Exibe a seção do ramal correspondente
    const ramalSelecionado = opcao.dataset.ramal;
    const secaoRamal = document.querySelector(`#${ramalSelecionado}`);
    secaoRamal.style.display = 'block';
  });
});

