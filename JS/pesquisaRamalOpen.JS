/*PESQUISA OPEN CASCAVEL*/ 
const searchInputOpen = document.getElementById("pesquisaOpen");
const filterSelectOpen = document.getElementById("filtroOpen");
const tableRowsOpen = document.getElementById("table_open").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputOpen.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueOpen = searchInputOpen.value.toUpperCase();
		const filterIndexOpen = filterSelectOpen.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsOpen.length; i++) {
			let rowDataOpen = tableRowsOpen[i].getElementsByTagName("td")[filterIndexOpen];
			if (rowDataOpen) {
				let cellValue = rowDataOpen.textContent.toUpperCase();
				if (cellValue.indexOf(filterValueOpen) > -1) {
					tableRowsOpen[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRowsOpen[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
				}
			}
		}
	});






	/*PESQUISA OPEN FOZ*/ 
	const searchInputOpenFoz = document.getElementById("pesquisaOpenFoz");
	const filterSelectOpenFoz = document.getElementById("filtroOpenFoz");
	const tableRowsOpenFoz = document.getElementById("table_openFoz").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputOpenFoz.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueOpenFoz = searchInputOpenFoz.value.toUpperCase();
		const filterIndexOpenFoz = filterSelectOpenFoz.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsOpenFoz.length; i++) {
			let rowDataOpenFoz = tableRowsOpenFoz[i].getElementsByTagName("td")[filterIndexOpenFoz];
			if (rowDataOpenFoz) {
				let cellValueFoz = rowDataOpenFoz.textContent.toUpperCase();
				if (cellValueFoz.indexOf(filterValueOpenFoz) > -1) {
					tableRowsOpenFoz[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRowsOpenFoz[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
				}
			}
		}
	});



	



	/*PESQUISA OPEN TOLEDO*/ 
	const searchInputOpenToledo = document.getElementById("pesquisaOpenToledo");
	const filterSelectOpenToledo = document.getElementById("filtroOpenToledo");
	const tableRowsOpenToledo = document.getElementById("table_openToledo").getElementsByTagName("tr");

	// adiciona um listener de eventos ao campo de entrada de texto
	searchInputOpenToledo.addEventListener("keyup", function() {
		// obtém o valor digitado e o filtro selecionado
		const filterValueOpenToledo = searchInputOpenToledo.value.toUpperCase();
		const filterIndexOpenToledo = filterSelectOpenToledo.selectedIndex;

		// percorre as linhas da tabela e verifica se o valor digitado está presente na célula correspondente ao filtro escolhido
		for (let i = 1; i < tableRowsOpenToledo.length; i++) {
			let rowDataOpenToledo = tableRowsOpenToledo[i].getElementsByTagName("td")[filterIndexOpenToledo];
			if (rowDataOpenToledo) {
				let cellValueToledo = rowDataOpenToledo.textContent.toUpperCase();
				if (cellValueToledo.indexOf(filterValueOpenToledo) > -1) {
					tableRowsOpenToledo[i].style.display = ""; // exibe a linha se a célula corresponder ao filtro
				} else {
					tableRowsOpenToledo[i].style.display = "none"; // oculta a linha se a célula não corresponder ao filtro
				}
			}
		}
	});



/*
	// adiciona um listener de eventos ao botão para limpar o filtro
	const clearButton = document.getElementById("clear");
	clearButton.addEventListener("click", function() {
		searchInputOpen.value = ""; // redefine o valor do campo de entrada de texto
		for (let i = 1; i < tableRowsOpen.length; i++) {
			tableRowsOpen[i].style.display = ""; // exibe todas as linhas novamente
		}
	});*/