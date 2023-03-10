const searchInput = document.getElementById("pesquisa");
const filterSelect = document.getElementById("filtro");
const tableRows = document.getElementById("table_open").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInput.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValue = searchInput.value.toUpperCase();
		const filterIndex = filterSelect.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRows.length; i++) {
			let rowData = tableRows[i].getElementsByTagName("td")[filterIndex];
			if (rowData) {
				let cellValue = rowData.textContent.toUpperCase();
				if (cellValue.indexOf(filterValue) > -1) {
					tableRows[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRows[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
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