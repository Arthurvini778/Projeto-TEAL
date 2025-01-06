let buttonMenu = document.querySelector('.menu-button');
let optionsMenu = document.querySelector('.menu-options');

buttonMenu.addEventListener("click", () => {


    let optionsMenuDisplay = window.getComputedStyle(optionsMenu).display;

    if(optionsMenuDisplay === 'none'){

        optionsMenu.style.display = 'block'
    }

    else{
        optionsMenu.style.display = 'none'
    }
})

document.addEventListener("click", (event) => {

    if (!buttonMenu.contains(event.target) && !optionsMenu.contains(event.target)) {
        
      optionsMenu.style.display = "none";
    }
  });

let buttons = document.querySelectorAll('.button-conteudo');

buttons.forEach((button, index) => {
    
    button.addEventListener("click", () => {
        
        let arrow = button.querySelector('.icone-serviços');
        let conteudo = document.querySelector(`#conteudo${index + 1}`);

        let conteudoDisplay = window.getComputedStyle(conteudo).display;

        if (conteudoDisplay === 'none' || conteudoDisplay === '') {

            conteudo.style.display = 'flex'; 
            arrow.style.transform = 'rotate(90deg)'; 
        } 
        
        else {
            
            conteudo.style.display = 'none'; 
            arrow.style.transform = 'rotate(0deg)'; 
        }
    });
});
