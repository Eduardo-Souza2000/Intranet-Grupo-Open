// Seleciona o botão de ajuda e o pop-up de ajuda
var botaoAjuda = document.getElementById("ajudaHome");
var popUpAjuda = document.getElementById("pop-up-ajuda");

// Quando o botão de ajuda é clicado, exibe o pop-up de ajuda
botaoAjuda.addEventListener("click", function() {
  popUpAjuda.style.display = "block";
});

// Quando o botão de fechar é clicado, fecha o pop-up de ajuda
var botaoFechar = document.getElementById("botao-fechar");
botaoFechar.addEventListener("click", function() {
  popUpAjuda.style.display = "none";
});

