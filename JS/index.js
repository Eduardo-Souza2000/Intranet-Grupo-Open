// Seleciona os elementos HTML com os IDs correspondentes e adiciona um evento de clique a eles que executa a função 'alerta'


let botinfoo = document.getElementById("sobre-nos");
botinfoo.addEventListener("click", alerta);


let botinfo = document.getElementById("informativo");
botinfo.addEventListener("click", alerta);


//let botnormas = document.getElementById("normas");
//botnormas.addEventListener("click", alerta);

//let botcon = document.getElementById("organograma");
//botcon.addEventListener("click", alerta);

// Função que exibe uma janela de alerta com o texto "Em Desenvolvimento
function alerta(){
  window.alert("Em Desenvolvimento");
}
    


// Cria um objeto com os IDs dos elementos HTML navegáveis
const targetIds = {
    'ramal': 'ponto-mais',
    'organograma': 'normas',
    'sobre-Nos': 'section-contato'
  };
  
  // Seleciona o elemento HTML com o ID 'reconhecimentoHome' e adiciona um evento de clique que executa uma função anônima
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
  });




  setTimeout(function() {
    var div = document.getElementById("confetes");
    div.style.display = "none";
  }, 5000); // Remove o elemento após 5 segundos


