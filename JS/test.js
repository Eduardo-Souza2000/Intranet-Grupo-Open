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
        },
        {
          id: "111",
          name: "Gerente 2",
          children: [
            {
              id: "1111",
              name: "Coordenador 1"
            },
            {
              id: "1112",
              name: "Coordenador 2"
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
          name: "Coordenador 3"
        },
        {
          id: "22",
          name: "Coordenador 4"
        }
        ,
        {
          id: "23",
          name: "Coordenador 4"
        }
        ,
        {
          id: "24",
          name: "Coordenador 4"
        }

      ]
    },
    {
      id: "3",
      name: "Sandra",
      children: [
        {
          id: "31",
          name: "Andressa",
        },
        {
          id: "32",
          name: "Silvana",
        },
        {
          id: "33",
          name: "Gerente 1",
        },
        {
          id: "34",
          name: "Gerente 2",
        },

        
      ]
    },
    {
    id: "4",
    name: "Cris",
    children: [
      {
        id: "41",
        name: "Gerente 1",
      },
      {
        id: "42",
        name: "Gerente 2",
        children: [
          {
            id: "421",
            name: "Coordenador 1"
          },
          {
            id: "422",
            name: "Coordenador 2"
          }
        ]
      }
    ]
    },
    {
      id: "5",
      name: "Carol",
      collapsed: true,
      children: [
        {
          id: "gerente1",
          name: "Gerente 1",
          collapsed: true
        },
        {
          id: "gerente2",
          name: "Gerente 2",
          collapsed: true,
          children: [
            {
              id: "coordenador1",
              name: "Coordenador 1"
            },
            {
              id: "coordenador2",
              name: "Coordenador 2"
            }
          ]
        }
      ]
    }


  ]
};



// Criar o objeto Spacetree
var st = new $jit.ST({
  // Define o container onde o organograma será criado
  injectInto: "organograma",
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
  // Define o estilo dos nós selecionados
  // Nós selecionados terão um fundo branco e borda azul
  NodeStyles: {
    selected: {
      lineWidth: 2,
      fillColor: "#fff",
      strokeColor: "#00f"
    }
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
        }
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
  },
  // Define a função que cria o HTML do nó
  // Aqui, estamos adicionando um evento para exibir os filhos quando o mouse passar sobre o nó
  onCreateLabel: function(label, node) {
    label.id = node.id;
    label.innerHTML = node.name;
    label.onclick = function() {
      st.onClick(node.id);
    };
    label.onmouseover = function() {
      if (node && node.children && node.children.length > 0) {
        node.collapsed = false;
        st.refresh();
      }
    };
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