let ButtonMenu = document.querySelector('.menu-button')
let OptionsMenu = document.querySelector('.menu-options')

ButtonMenu.addEventListener("click", () => {

    if(OptionsMenu.style.display === 'none'){
        OptionsMenu.style.display = 'block'
    }

    else{
        OptionsMenu.style.display = 'none'
    }
})

let ButtonService = document.querySelectorAll('.button-conteudo');
let ConteudoService = document.querySelectorAll('.card__conteudo');
let Arrow = document.querySelectorAll('.icone-serviços')


ButtonService.forEach((.button-conteudo, index) => {

    let rotation = 0;

    span.addEventListener("click", () => {
        rotation += 90;
        Arrow[index].style.transform `rotate(${rotation}deg)`
    });
});
