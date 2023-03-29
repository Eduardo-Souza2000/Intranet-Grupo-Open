const botOpen = document.getElementsByClassName("selecionaOpc-favoritos");
const menu = document.getElementById('menu-opc');
const links = document.querySelectorAll('.esconde_link')

let exibirlink = false;

window.addEventListener('popstate', () =>{
    links.forEach(link =>{
        if (link.className === 'mostra_link' && exibirlink){
            link.className = 'esconde_link';
            menu.style.display = 'flex';
            exibirlink = false;
            return;
        }
    })
})


for (let i=0; i < botOpen.length; i++){
    const link = links[i];

    botOpen[i].addEventListener('click', function(){
        link.className = 'mostra_link'
        menu.style.display = 'none';
        setTimeout(() => exibirlink = true, 10)
    })
}