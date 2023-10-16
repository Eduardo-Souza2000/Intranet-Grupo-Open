/* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA GERAL*/
function ordenarTabela() {
    var tabela, linhas, i, x, y, trocado;
    tabela = document.getElementById("table_Geral");
    trocado = true;
    while (trocado) {
      trocado = false;
      linhas = tabela.rows;
      for (i = 1; i < linhas.length - 1; i++) {
        x = linhas[i].getElementsByTagName("TD")[0];
        y = linhas[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
          trocado = true;
        }
      }
    }
  }


/* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA OPEN CASCAVEL*/
  function ordenarTabelaopenCascavel() {
    var tabela, linhas, i, x, y, trocado;
    tabela = document.getElementById("table_open");
    trocado = true;
    while (trocado) {
      trocado = false;
      linhas = tabela.rows;
      for (i = 1; i < linhas.length - 1; i++) {
        x = linhas[i].getElementsByTagName("TD")[0];
        y = linhas[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
          trocado = true;
        }
      }
    }
  }

  
  /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA OPEN FOZ*/
  function ordenarTabelaopenFoz() {
    //window.alert("Olá, informamos que a concessionária Renault Foz está passando por reformas atualmente. Caso necessite falar com algum vendedor de veículos, por favor entre em contato pelos ramais 301 e 324. Agradecemos a compreensão.");
    var tabela, linhas, i, x, y, trocado;
    tabela = document.getElementById("table_openFoz");
    trocado = true;
    while (trocado) {
      trocado = false;
      linhas = tabela.rows;
      for (i = 1; i < linhas.length - 1; i++) {
        x = linhas[i].getElementsByTagName("TD")[0];
        y = linhas[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
          trocado = true;
        }
      }
    }
  }

  /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA OPEN TOLEDO*/
  function ordenarTabelaopenToledo() {
    var tabela, linhas, i, x, y, trocado;
    tabela = document.getElementById("table_openToledo");
    trocado = true;
    while (trocado) {
      trocado = false;
      linhas = tabela.rows;
      for (i = 1; i < linhas.length - 1; i++) {
        x = linhas[i].getElementsByTagName("TD")[0];
        y = linhas[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
          trocado = true;
        }
      }
    }
  }

   /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA Vetor Cascavel*/
   function ordenarTabelaVetorCascavel() {
    var tabela, linhas, i, x, y, trocado;
    tabela = document.getElementById("table_vetor");
    trocado = true;
    while (trocado) {
      trocado = false;
      linhas = tabela.rows;
      for (i = 1; i < linhas.length - 1; i++) {
        x = linhas[i].getElementsByTagName("TD")[0];
        y = linhas[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
          trocado = true;
        }
      }
    }
  }

 /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA Vetor Foz*/
 function ordenarTabelaVetorFoz() {
  var tabela, linhas, i, x, y, trocado;
  tabela = document.getElementById("table_vetorFoz");
  trocado = true;
  while (trocado) {
    trocado = false;
    linhas = tabela.rows;
    for (i = 1; i < linhas.length - 1; i++) {
      x = linhas[i].getElementsByTagName("TD")[0];
      y = linhas[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
        trocado = true;
      }
    }
  }
}


 /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA Vetor Umuarama*/
 function ordenarTabelaVetorUmuarama() {
  var tabela, linhas, i, x, y, trocado;
  tabela = document.getElementById("table_vetorUmuarama");
  trocado = true;
  while (trocado) {
    trocado = false;
    linhas = tabela.rows;
    for (i = 1; i < linhas.length - 1; i++) {
      x = linhas[i].getElementsByTagName("TD")[0];
      y = linhas[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
        trocado = true;
      }
    }
  }
}

 /* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA Brizza*/
 function ordenarTabelaBrizza() {
  var tabela, linhas, i, x, y, trocado;
  tabela = document.getElementById("table_brizza");
  trocado = true;
  while (trocado) {
    trocado = false;
    linhas = tabela.rows;
    for (i = 1; i < linhas.length - 1; i++) {
      x = linhas[i].getElementsByTagName("TD")[0];
      y = linhas[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
        trocado = true;
      }
    }
  }
}

/* ORGANIZA TABELA EM ORDEM ALFABETICA, TABELA Open Seminivos*/
function ordenarTabelaOpenSeminovos() {
  var tabela, linhas, i, x, y, trocado;
  tabela = document.getElementById("table_openOpenSemiNovos");
  trocado = true;
  while (trocado) {
    trocado = false;
    linhas = tabela.rows;
    for (i = 1; i < linhas.length - 1; i++) {
      x = linhas[i].getElementsByTagName("TD")[0];
      y = linhas[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
        trocado = true;
      }
    }
  }
}

