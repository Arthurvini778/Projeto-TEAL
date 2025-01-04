function toggleMenu() {
    var opcoes = document.getElementById('menu-options');

    if(opcoes.style.display == 'none'){
        opcoes.style.display = 'flex';
    }
    else{
        opcoes.style.display = 'none';
    }
}