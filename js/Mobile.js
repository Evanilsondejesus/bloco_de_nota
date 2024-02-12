
//let btnMenu = document.getElementById('btn-menu')


//let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')






let abrir = document.getElementById('meu-menu');
let lateral = document.getElementById('lateral');
let new_chat = document.getElementById('new_chat');
let fechar = document.getElementById('btn-fechar');
let titulos = document.getElementById('container_titulos');

//



fechar.style.display ="none";



abrir.addEventListener('click', ()=>{
    fechar.style.display ="block"
   
 AbrirMenu() 

})

 
overlay.addEventListener('click', ()=>{
  FecharMenu();
})










function AbrirMenu() {

    lateral.classList.add('abrir-menu')
    lateral.style.display ="block";
    new_chat.style.display ="block";
    fechar.style.display ="block";
    titulos.style.display ="block"
  //  fechar.style.display ="none"
   
}


function FecharMenu(params) {
    fechar.style.display ="block";
    // menu.classList.remove('abrir-menu');
     lateral.classList.remove('abrir-menu')
     new_chat.style.display ="none";
     fechar.style.display ="none"
     titulos.style.display ="none"
 
}




window.addEventListener('resize', function() {
const larguraJanela = window.innerWidth;
 if (larguraJanela > 1020) { 
    FecharMenu();
    new_chat.style.display ="block";
    titulos.style.display ="block"
    fechar.style.display ="none";

    }
    if (larguraJanela < 1020) { 
        
        AbrirMenu()

    }


});