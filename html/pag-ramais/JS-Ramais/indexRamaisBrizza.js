// Obtém o elemento de entrada de texto com o ID "pesquisa"
const searchInput = document.getElementById("pesquisa");
// Obtém o elemento de seleção de filtro com o ID "filtro
const filterSelect = document.getElementById("filtro");
// Obtém todas as linhas da tabela com o ID "table_open"
const tableRows = document.getElementById("table_brizza").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInput.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValue = searchInput.value.toUpperCase();
		const filterIndex = filterSelect.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRows.length; i++) {
			// Obtém a célula de dados da linha atual que corresponde ao filtro selecionado
			let rowData = tableRows[i].getElementsByTagName("td")[filterIndex];
			if (rowData) {
				// Obtém o valor da célula em letras maiúsculas
				let cellValue = rowData.textContent.toUpperCase();
				if (cellValue.indexOf(filterValue) > -1) {
					// exibe a linha se a célula corresponder ao filtro
					tableRows[i].style.display = ""; 
				} else {
					 // oculta a linha se a célula não corresponder ao filtro
					tableRows[i].style.display = "none";
				}
			}
		}
	});

	// adiciona um listener de eventos ao botão para limpar o filtro
	const clearButton = document.getElementById("clear");
	clearButton.addEventListener("click", function() {
		searchInput.value = ""; // redefine o valor do campo de entrada de texto
		for (let i = 1; i < tableRows.length; i++) {
			tableRows[i].style.display = ""; // exibe todas as linhas novamente
		}
	});