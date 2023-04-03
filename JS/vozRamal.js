/*// Cria um objeto com os IDs dos elementos navegáveis
const targetIds = {
    'Open Cascavel': 'Open Foz',
    'Open Toledo': 'Cascavel',
    'Foz': 'Umuarama', 
    'brisa': 'home',
    'seminovos': 'geral',
    
 };
  
  // Define um evento para quando o usuário clicar no botão de comando de voz
  document.getElementById('reconhecimentoHome').addEventListener('click', () => {

    // Toca um som para indicar que o sistema está ouvindo
    const audio = new Audio('beep.mp3');
    audio.play();
  
    // Cria uma nova instância da API de reconhecimento de voz
    const recognition = new webkitSpeechRecognition();
  
    // Define o idioma de reconhecimento
    recognition.lang = 'pt-BR';
  
    // Define um evento para quando o usuário dá um comando de voz
    recognition.onresult = (event) => {
    // Pega a última transcrição de fala reconhecida
    const lastTranscript = event.results[event.results.length - 1][0].transcript;
  
    // Percorre todos os botões com o atributo "data-voice"
    const buttons = document.querySelectorAll('[data-voice]');

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
  
      // Verifica se o valor do atributo "data-voice" corresponde à transcrição de fala
      if (lastTranscript.includes(button.dataset.voice)) {
        // Seleciona o botão correspondente
        button.click();
        break;
      }
    }
  };
  
  
    // Começa a ouvir por comandos de voz
    recognition.start();
  });*/


  document.getElementById("search-btn").addEventListener("click", function() {
    var searchBox = document.getElementById("search-box");
    if (searchBox.style.display === "none") {
      searchBox.style.display = "flex";
    } else {
      searchBox.style.display = "none";
    }
  });

  document.getElementById("search-btnOpenFoz").addEventListener("click", function() {
    var searchBoxFoz = document.getElementById("search-boxOpenFoz");
    if (searchBoxFoz.style.display === "none") {
      searchBoxFoz.style.display = "flex";
    } else {
      searchBoxFoz.style.display = "none";
    }
  });