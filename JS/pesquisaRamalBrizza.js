// Obtém o elemento de entrada de texto com o ID "pesquisa"
const searchInputbrizza = document.getElementById("pesquisaBrizza");
// Obtém o elemento de seleção de filtro com o ID "filtro
const filterSelectbrizza = document.getElementById("filtrobrizza");
// Obtém todas as linhas da tabela com o ID "table_open"
const tableRowsbrizza = document.getElementById("table_brizza").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputbrizza.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValuebrizza = searchInputbrizza.value.toUpperCase();
		const filterIndexbrizza = filterSelectbrizza.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsbrizza.length; i++) {
			// Obtém a célula de dados da linha atual que corresponde ao filtro selecionado
			let rowDatabrizza = tableRowsbrizza[i].getElementsByTagName("td")[filterIndexbrizza];
			if (rowDatabrizza) {
				// Obtém o valor da célula em letras maiúsculas
				let cellValuebrizza = rowDatabrizza.textContent.toUpperCase();
				if (cellValuebrizza.indexOf(filterValuebrizza) > -1) {
					// exibe a linha se a célula corresponder ao filtro
					tableRowsbrizza[i].style.display = ""; 
				} else {
					 // oculta a linha se a célula não corresponder ao filtro
					 tableRowsbrizza[i].style.display = "none";
				}
			}
		}
	});
	
/*
	// adiciona um listener de eventos ao botão para limpar o filtro
	const clearButtonBrizza = document.getElementById("clear");
	
	clearButtonBrizza.addEventListener("click", function() {
		searchInputbrizza.value = ""; // redefine o valor do campo de entrada de texto
		for (let i = 1; i < tableRowsbrizza.length; i++) {
			tableRowsbrizza[i].style.display = ""; // exibe todas as linhas novamente
		}
	});*/