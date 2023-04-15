
/* PESQUISA VETOR CASCAVEL*/
const searchInput = document.getElementById("pesquisaVetCascavel");
const filterSelect = document.getElementById("filtroVetCascavel");
const tableRows = document.getElementById("table_vetor").getElementsByTagName("tr");

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



	/* PESQUISA VETOR FOZ*/
	const searchInputFoz = document.getElementById("pesquisaFoz");
	const filterSelectFoz = document.getElementById("filtroFoz");
	const tableRowsFoz = document.getElementById("table_vetorFoz").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputFoz.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueFoz = searchInputFoz.value.toUpperCase();
		const filterIndexFoz = filterSelectFoz.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsFoz.length; i++) {
			let rowDataFoz = tableRowsFoz[i].getElementsByTagName("td")[filterIndexFoz];
			if (rowDataFoz) {
				let cellValueFoz = rowDataFoz.textContent.toUpperCase();
				if (cellValueFoz.indexOf(filterValueFoz) > -1) {
					tableRowsFoz[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRowsFoz[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
				}
			}
		}
	});

	

	/* PESQUISA VETOR UMUARAMA*/
	const searchInputUmuarama = document.getElementById("pesquisaumuarama");
	const filterSelecUmuarama = document.getElementById("filtroumuarama");
	const tableRowsUmuarama = document.getElementById("table_vetorUmuarama").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputUmuarama.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueUmuarama = searchInputUmuarama.value.toUpperCase();
		const filterIndexUmuarama = filterSelecUmuarama.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsUmuarama.length; i++) {
			let rowDataUmuarama = tableRowsUmuarama[i].getElementsByTagName("td")[filterIndexUmuarama];
			if (rowDataUmuarama) {
				let cellValueUmuarama = rowDataUmuarama.textContent.toUpperCase();
				if (cellValueUmuarama.indexOf(filterValueUmuarama) > -1) {
					tableRowsUmuarama[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRowsUmuarama[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
				}
			}
		}
	});





/*
	// adiciona um listener de eventos ao botão para limpar o filtro
	const clearButton = document.getElementById("clear");
	clearButton.addEventListener("click", function() {
		searchInput.value = ""; // redefine o valor do campo de entrada de texto
		for (let i = 1; i < tableRows.length; i++) {
			tableRows[i].style.display = ""; // exibe todas as linhas novamente
		}
	});*/