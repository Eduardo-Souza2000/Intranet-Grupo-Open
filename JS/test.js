var data = {
    id: "ceo",
    name: "CEO",
    collapsed: true, // Adiciona a propriedade collapsed para exibir somente o nó raiz
    children: [
      {
        id: "1",
        name: "Viviane",
        children: [
          {
            id: "11",
            name: "Gerente 1",
            children:[]
          },
          {
            id: "111",
            name: "Gerente 2",
            children: [
              {
                id: "1111",
                name: "Coordenador 1",
                children:[]
              },
              {
                id: "1112",
                name: "Coordenador 2",
                children:[]
              }
            ]
          }
        ]
      },
      {
        id: "2",
        name: "Tati",
        children: [
          {
            id: "21",
            name: "Coordenador 3",
            children:[]
          },
          {
            id: "22",
            name: "Coordenador 4",
            children:[]
          }
          ,
          {
            id: "23",
            name: "Coordenador 4",
            children:[]
          }
          ,
          {
            id: "24",
            name: "Coordenador 4",
            children:[]
          }
  var labelType, useGradients, nativeTextSupport, animar;
  
        ]
      },
      {
        id: "3",
        name: "Sandra",
        children: [
          {
            id: "31",
            name: "Andressa",
            children:[]
          },
          {
            id: "32",
            name: "Silvana",
            children:[]
          },
          {
            id: "33",
            name: "Gerente 1",
            children:[]
          },
          {
            id: "34",
            name: "Gerente 2",
            children:[]
          },
  var Log = {
    elem: false,
    write: function(text){
      if (!this.elem) 
        this.elem = document.getElementById('log');
      this.elem.innerHTML = text;
      this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
  };
  
  
        ]
      },
      {
      id: "4",
      name: "Cris",
  
    var data = {
      id: "0",
      name: "CEO",
      dados: {},
      children: [
        {
          id: "41",
          name: "Gerente 1",
          children:[]
          id: "1",
          name: "Viviane",  
          children: [
            {
              id: "11",
              name: "Gerente 1",
              dados: {},  
              children:[]
            },
            {
              id: "111",
              name: "Gerente 2",
              dados: {},  
              children: [
                {
                  id: "1111",
                  name: "Coordenador 1",
                  dados: {},  
                  children:[]
                },
                {
                  id: "1112",
                  name: "Coordenador 2",
                  dados: {},  
                  children:[]
                }
              ]
            }
          ]
        },
        {
          id: "42",
          name: "Gerente 2",
          id: "2",
          name: "Tati",
          dados: {},  
          children: [
            {
              id: "421",
              name: "Coordenador 1",
              id: "21",
              name: "Coordenador 3",
              dados: {},  
              children:[]
            },
            {
              id: "422",
              name: "Coordenador 2",
              id: "22",
              name: "Coordenador 4",
              dados: {},  
              children:[]
            }
            ,
            {
              id: "23",
              name: "Coordenador 4",
              dados: {},  
              children:[]
            }
            ,
            {
              id: "24",
              name: "Coordenador 4",
              dados: {},  
              children:[]
            }
  
          ]
        }
      ]
      },
      {
        id: "5",
        name: "Carol",
        collapsed: true,
        },
        {
          id: "3",
          name: "Sandra",
          dados: {},  
          children: [
            {
              id: "31",
              name: "Andressa",
              dados: {},  
              children:[]
            },
            {
              id: "32",
              name: "Silvana",
              dados: {},  
              children:[]
            },
            {
              id: "33",
              name: "Gerente 1",
              dados: {},  
              children:[]
            },
            {
              id: "34",
              name: "Gerente 2",
              dados: {},  
              children:[]
            },
  
  
          ]
        },
        {
        id: "4",
        name: "Cris",
        dados: {},  
        children: [
          {
            id: "gerente1",
            id: "41",
            name: "Gerente 1",
            collapsed: true
            dados: {},  
            children:[]
          },
          {
            id: "gerente2",
            id: "42",
            name: "Gerente 2",
            collapsed: true,
            dados: {},  
            children: [
              {
                id: "coordenador1",
                id: "421",
                name: "Coordenador 1",
                dados: {},  
                children:[]
              },
              {
                id: "coordenador2",
                id: "422",
                name: "Coordenador 2",
                dados: {},  
                children:[]
              }
            ]
          }
        ]
      }
  
        },
        {
          id: "5",
          name: "Carol",
          collapsed: true,
          dados: {},  
          children: [
            {
              id: "gerente1",
              name: "Gerente 1",
              dados: {},  
              collapsed: true
            },
            {
              id: "gerente2",
              name: "Gerente 2",
              dados: {},  
              collapsed: true,
              children: [
                {
                  id: "coordenador1",
                  name: "Coordenador 1",
                  dados: {},  
                  children:[]
                },
                {
                  id: "coordenador2",
                  name: "Coordenador 2",
                  dados: {},  
                  children:[]
                }
              ]
            }
          ]
        }
  
    ]
  };
  
      ]
    };
  
  
  
  // Criar o objeto Spacetree
  var st = new $jit.ST({
    // Define o container onde o organograma será criado
    injectInto: "organograma",
    // Criar o objeto Spacetree
    var st = new $jit.ST({
      // Define o container onde o organograma será criado
      injectInto: "organograma",
  
    duration: 800,  
      duration: 800,  
  
    transition: $jit.Trans.Quart.easeInOut,
      transition: $jit.Trans.Quart.easeInOut,
  
    levelDistance: 50,  
      levelDistance: 50,  
  
      //enable panning  
      Navigation: {  
        enable:true,  
        panning:true  
      },
    // Define os dados do organograma
    root: data,
    // Define o estilo dos nós
    Node: {
      height: 50,
      width: 150,
      type: "rectangle",
      color: "#aaa", 
      align: "center",
      overridable: true,
      selected: {
        lineWidth: 2,
        strokeColor: "#00f",
        background: "#ffba00"
      }
    },
    // Define o estilo das linhas de ligação entre os nós
    Edge: {
      type: "bezier",
      overridable: true
    },
      // Define os dados do organograma
      root: data,
      // Define o estilo dos nós
      node: {
        height: 20,
        width: 60,
        type: 'rectangle',
        color: '#aaa',
        overridable: true
      },
  
      // Define o estilo das linhas de ligação entre os nós
      Edge: {
        type: "bezier",
        overridable: true
      },
  
      onBeforeCompute: function(node){
        Log.write("loading " + node.name);
      },
  
    // Define o comportamento de seleção de nós
    // Quando um nó for selecionado, exibir seus filhos
    // Quando um nó for deselecionado, esconder seus filhos
    Events: {
      enable: true,
      type: "Native",
      onClick: function(node, eventInfo, e) {
        if (node) {
          // Verificar se o nó clicado tem filhos
          if (node.children && node.children.length > 0) {
            // Se tiver filhos, exibir ou ocultá-los, dependendo do estado atual
            if (node.collapsed) {
              st.op.expand(node.id);
            } else {
              st.op.contract(node.id);
            }
      onAfterCompute: function(){
        Log.write("done");
      }, 
  
      onCreateLabel: function(label, node){
        label.id = node.id;            
        label.innerHTML = node.name;
        label.onclick = function(){
          if(normal.checked) {
            st.onClick(node.id);
          } else {
            st.setRoot(node.id, 'animate');
          }
        };
        //set label styles  
        var style = label.style;
        style.width = 60 + 'px';
        style.height = 17 + 'px';            
        style.cursor = 'pointer';
        style.color = '#333';
        style.fontSize = '0.8em';
        style.textAlign= 'center';
        style.paddingTop = '3px';
        },
  
        onBeforePlotNode: function(node){
          //add some color to the nodes in the path between the
          //root node and the selected node.
          if (node.selected) {
              node.data.$color = "#ff7";
          }
          else {
              delete node.data.$color;
              //if the node belongs to the last plotted level
              if(!node.anySubnode("exist")) {
                  //count children number
                  var count = 0;
                  node.eachSubnode(function(n) { count++; });
                  //assign a node color based on
                  //how many children it has
                  node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
              }
          }
          // Alterar o estilo do nó clicado para o estilo selecionado
          st.graph.nodes().forEach(function(n) {
            if (n.id === node.id) {
              n.selected = true;
            } else {
              n.selected = false;
      }
  
        /*
      // Define o comportamento de seleção de nós
      // Quando um nó for selecionado, exibir seus filhos
      // Quando um nó for deselecionado, esconder seus filhos
      Events: {
        enable: true,
        type: "Native",
        onClick: function(node, eventInfo, e) {
          if (node) {
            // Verificar se o nó clicado tem filhos
            if (node.children && node.children.length > 0) {
              // Se tiver filhos, exibir ou ocultá-los, dependendo do estado atual
              if (node.collapsed) {
                st.op.expand(node.id);
              } else {
                st.op.contract(node.id);
              }
            }
          });
          st.plot();
        } else {
          st.onClick(st.root);
            // Alterar o estilo do nó clicado para o estilo selecionado
            st.graph.nodes().forEach(function(n) {
              if (n.id === node.id) {
                n.selected = true;
              } else {
                n.selected = false;
              }
            });
            st.plot();
          } else {
            st.onClick(st.root);
          }
        }
      },*/
  
  
    });
  
    // Configurar o objeto Spacetree
    st.config.levelsToShow = 100;
    st.config.orientation = "top";
    st.config.align = "center";
    st.config.subtreeOffset = 50;
  
    // Inicializar o objeto Spacetree
    // Inicializar o objeto Spacetree
    st.loadJSON(data);
    st.compute();
    st.geom.translate(new $jit.Complex(-200, 0), "current");
  
    st.onClick(st.root);
  
    var top = $jit.id('r-top'), 
    left = $jit.id('r-left'), 
    bottom = $jit.id('r-bottom'), 
    right = $jit.id('r-right'),
    normal = $jit.id('s-normal');
  
    function changeHandler() {
      if(this.checked) {
          top.disabled = bottom.disabled = right.disabled = left.disabled = true;
          st.switchPosition(this.value, "animate", {
              onComplete: function(){
                  top.disabled = bottom.disabled = right.disabled = left.disabled = false;
              }
          });
      }
    },
    // Define a função que cria o HTML do nó
    // Aqui, estamos adicionando um evento para exibir os filhos quando o mouse passar sobre o nó
    onCreateLabel: function(label, node) {
      label.id = node.id;
      label.innerHTML = node.name;
      label.onclick = function() {
        if(normal.checked) {  
          st.onClick(node.id);  
        } else {  
        st.setRoot(node.id, 'animate');  
        }  
      };
  }
  
  top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
  
  
  
  
  
  
  
    }
  });
  
  // Configurar o objeto Spacetree
  st.config.levelsToShow = 100;
  st.config.orientation = "top";
  st.config.align = "center";
  st.config.subtreeOffset = 50;
  
  // Inicializar o objeto Spacetree
  // Inicializar o objeto Spacetree
  st.loadJSON(data);
  st.compute();
  st.onClick(st.root);