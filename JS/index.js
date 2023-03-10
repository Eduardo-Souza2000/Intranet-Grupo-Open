let botsobre = document.getElementById("sobre-nos");
botsobre.addEventListener("click", alerta);

let botinfo = document.getElementById("informativo");
botinfo.addEventListener("click", alerta);

let bothyundai = document.getElementById("links-hyundai");
bothyundai.addEventListener("click", alerta);

let botmit = document.getElementById("links-mitsubich");
botmit.addEventListener("click", alerta);

let botren = document.getElementById("links-renault");
botren.addEventListener("click", alerta);

let botnormas = document.getElementById("normas");
botnormas.addEventListener("click", alerta);

let botcon = document.getElementById("convenio");
botcon.addEventListener("click", alerta);




function alerta(){
    window.alert("Em Desenvolvimento");
}
    


// Cria um objeto com os IDs dos elementos navegáveis
const targetIds = {
    'ramal': 'ponto-mais',
    'sobre': 'section-sobre',
    'contato': 'section-contato'
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
  });

