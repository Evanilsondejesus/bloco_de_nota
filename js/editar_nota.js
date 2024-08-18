
// templete quando o contéudo da nota é editado
function EditarNota(titulo,  posicao, corpoTexto){
   

    if (titulo == undefined) { 
    
    titulo = "Texto sem titulo";
    const new_titulo = document.createElement("h2");
    new_titulo.innerText = titulo;
    conteiner_titulo.append(new_titulo);
    conteudo_texto.push({titulo: titulo,   texto: ""})
    
    RenderTitulo();
    }
    

    container_conteudo.innerHTML ="";
    const mytemplete = document.createElement("template");
    mytemplete.innerHTML = `
    <h1 style="text-align:center; cursor: pointer; outline: none;"   contenteditable="true" id="valorTitulo" tabindex="0">${titulo}</h1> 
    <textarea name="" id="editor_texto" rows="2"  placeholder="Digite alguma coisa" style="width: 100%; height: 100vh;  background-color: #FBFAB9; border: none; font-size: 20px ">
     
    
    </textarea>
    <div class="container_acao_txt" id="container_acao_txt">
    </div>
    
     `;
    container_conteudo.appendChild(mytemplete.content.cloneNode(true));
    const editorTexto = document.getElementById("editor_texto");
     
    
    if (corpoTexto != null || corpoTexto != "") {
    editorTexto.value = corpoTexto;
     
    } 
    
    const novoTitulo =document.getElementById("valorTitulo");
    editorTexto.addEventListener('blur',SalvamentoAutomatico);
    novoTitulo.addEventListener('blur', SalvamentoAutomatico);
    
    
    
    
    function SalvamentoAutomatico() {
    conteudo_texto[posicao] = {titulo: novoTitulo.innerText, texto: editorTexto.value};
    RenderTitulo()
    }
     
    }
    
    