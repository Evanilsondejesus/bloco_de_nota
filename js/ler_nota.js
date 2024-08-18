// templete quando a nota é virsualizada

function ConteudoVirsualizado(titulo, posicao, corpoTexto){
 

    container_conteudo.innerHTML ="";
    
    const mytemplete = document.createElement("template");
    mytemplete.innerHTML = `
    <h1 style="text-align: center;"  id="valorTitulo" >${titulo}</h1> 
    <textarea name="" id="editor_texto" readonly rows="2" placeholder="Digite seu comentário" style="width: 100%; height: 100vh;  background-color: #FBFAB9; border: none; cursor: default; font-size: 18px ">
    </textarea>
    
    <div class="container_acao_txt" id="container_acao_txt" style="display: flex;gap: 20px;">
    
    <button>
    
    <img src="imagens/share.svg" alt="" id="compartilhar">
    </button>
    
    <button>
    <img src="imagens/trash3.svg" alt="apagar nota"  id="apagar_nota" >
     </button>
    </div>
    
    `;

    
    container_conteudo.appendChild(mytemplete.content.cloneNode(true));
    
    
    const compartilhar = document.getElementById("compartilhar");
    const editor_texto = document.getElementById("editor_texto");
    const valorTitulo = document.getElementById("valorTitulo");
    const apagarNota = document.getElementById("apagar_nota");
    const container_texto = document.getElementById("conteiner_texto");
    const container_acao_txt = document.getElementById("container_acao_txt");
     




    compartilhar.addEventListener("click", ()=>{
        if (navigator.share) {
            navigator.share({
              title: titulo,
              text: editor_texto.value,
              url: 'WWW.google.com'
            })
              .then(() => console.log('Conteúdo compartilhado com sucesso.'))
              .catch((error) => console.log('Erro ao compartilhar:', error));
          } else {
            console.log('API de compartilhamento não suportada.');
          }})
    
    
    if (corpoTexto == "" || corpoTexto == null) {
    editor_texto.value = "VOCÊ AINDA NÃO DIGITOU NADA...";
    
    }else if(corpoTexto != "" || corpoTexto != null){
    editor_texto.value =  corpoTexto;
    
    
    }
    
    
    
     
    
    
    
    editor_texto.addEventListener("click", ()=> {
    EditarNota(titulo, posicao, corpoTexto);
    document.getElementById("editor_texto").focus()
    })
    
    
    
    
    
    
    
    valorTitulo.addEventListener("click", ()=> {
    EditarNota(titulo, posicao, corpoTexto);
    valorTitulo.value=""
    document.getElementById("valorTitulo").focus()
    
    })
        
    
    
    
    apagarNota.addEventListener("click", function(){
     
    const titulos = conteiner_titulo.querySelectorAll("h2");
    titulos[posicao].remove()
    conteudo_texto.splice(posicao, 1);
    ContainerInit()
    
    })
    
    
    

    container_texto.addEventListener('wheel', function() {
    container_acao_txt.style.display ="none";
        
    clearTimeout(temporizador);
    temporizador = setTimeout(function() {
    container_acao_txt.style.display ="flex";
     
    }, 1500);
        
    })
    
    
    }
    