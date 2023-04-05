// Obtém o elemento de entrada de texto com o ID "pesquisa"
const searchInputGeral = document.getElementById("pesquisageral");
// Obtém o elemento de seleção de filtro com o ID "filtro
const filterSelectGeral = document.getElementById("filtrogeral");
// Obtém todas as linhas da tabela com o ID "table_open"
const tableRowsGeral = document.getElementById("table_Geral").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputGeral.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueGeral = searchInputGeral.value.toUpperCase();
		const filterIndexGeral = filterSelectGeral.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsGeral.length; i++) {
			// Obtém a célula de dados da linha atual que corresponde ao filtro selecionado
			let rowDataGeral = tableRowsGeral[i].getElementsByTagName("td")[filterIndexGeral];
			if (rowDataGeral) {
				// Obtém o valor da célula em letras maiúsculas
				let cellValueGeral = rowDataGeral.textContent.toUpperCase();
				if (cellValueGeral.indexOf(filterValueGeral) > -1) {
					// exibe a linha se a célula corresponder ao filtro
					tableRowsGeral[i].style.display = ""; 
				} else {
					 // oculta a linha se a célula não corresponder ao filtro
					 tableRowsGeral[i].style.display = "none";
				}
			}
		}
	});
	
/*
	// adiciona um listener de eventos ao botão para limpar o filtro
	const clearButtonGeral = document.getElementById("clear");
	
	clearButtonGeral.addEventListener("click", function() {
		searchInputGeral.value = ""; // redefine o valor do campo de entrada de texto
		for (let i = 1; i < tableRowsGeral.length; i++) {
			tableRowsGeral[i].style.display = ""; // exibe todas as linhas novamente
		}
	});*/