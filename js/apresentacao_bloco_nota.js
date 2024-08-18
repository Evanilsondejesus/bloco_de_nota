// templete de apresentação bloco de nota

function ContainerInit() { 

    container_conteudo.innerHTML ="";
    const mytemplete = document.createElement("template");
    mytemplete.innerHTML = `
    <div class="container_init" >
    <img src="imagens/Ellipse 15.svg" alt="" height="250" >
    <span style="font-size: 20px;">O que você desejar escrever hoje?</span>
    <button  id="init_chat">Novo texto</button>
    </div> 
    
    `;


    container_conteudo.appendChild(mytemplete.content.cloneNode(true));
   const script = document.createElement("script"); 
    script.src = "./mobile.js";
     
    
    script.onload = function() {
        document.body.appendChild(mytemplete.content.cloneNode(true));
    };

    const ini_chat = document.getElementById("init_chat");
    



    ini_chat.addEventListener("click", ()=>{
      EditarNota(null, conteudo_texto.length, null)
      AbrirMenu()
    
    } );
    
    
    
    }