
// arquivo2.js
//import { minhaFuncao } from '../menu';



// Chama a função do arquivo1.js
//minhaFuncao();

const new_elemento = document.getElementById("new_chat");


const conteudo_texto =[]; 
 const conteiner_titulo = document.getElementById("container_titulos");
 const container_conteudo = document.getElementById("container_conteudo");

 var temporizador;



 ContainerInit();
new_elemento.addEventListener("click", ()=> Conteudo(null, conteudo_texto.length, null));



 

 





//click do botão h2
conteiner_titulo.addEventListener("click", function(event){
const filhos = event.currentTarget.children;
const indiceElementoClicado = Array.from(filhos).indexOf(event.target);
const posicao = indiceElementoClicado;

var titulo = event.target.innerText


corpoTexto  = conteudo_texto[posicao].texto ==''? "": conteudo_texto[posicao].texto;





ConteudoVirsualizado(titulo, posicao, corpoTexto);



})
 


 

/* TEMPLETES  */
 
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
  script.src = "./Mobile.js";
   
  
  script.onload = function() {
      document.body.appendChild(mytemplete.content.cloneNode(true));
  };
  const ini_chat = document.getElementById("init_chat");
  
  ini_chat.addEventListener("click", ()=>{
    Conteudo(null, conteudo_texto.length, null)
    AbrirMenu()
  
  } );
  
  
  
  }
 




//configuraçao geral de conteudo
function Conteudo(titulo,  posicao, corpoTexto){
   

if (titulo == undefined) { 

titulo = "Texto sem titulo";
const new_titulo = document.createElement("h2");
new_titulo.innerText = titulo;
conteiner_titulo.append(new_titulo);
conteudo_texto.push({titulo: titulo,   texto: ""})

RenderTitulo();
}





//const container_conteudo = document.getElementById("container_conteudo");
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





 

function ConteudoVirsualizado(titulo, posicao, corpoTexto){
 
 
//const container_conteudo = document.getElementById("container_conteudo");
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
//VerificarId()

container_conteudo.appendChild(mytemplete.content.cloneNode(true));


const compartilhar = document.getElementById("compartilhar");
const editor_texto = document.getElementById("editor_texto");
const valorTitulo = document.getElementById("valorTitulo");


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
Conteudo(titulo, posicao, corpoTexto);
document.getElementById("editor_texto").focus()
})







valorTitulo.addEventListener("click", ()=> {
Conteudo(titulo, posicao, corpoTexto);
valorTitulo.value=""
document.getElementById("valorTitulo").focus()

})
    



const apagarNota = document.getElementById("apagar_nota");

apagarNota.addEventListener("click", function(){
 
const titulos = conteiner_titulo.querySelectorAll("h2");
titulos[posicao].remove()
conteudo_texto.splice(posicao, 1);
ContainerInit()

})



const container_texto = document.getElementById("conteiner_texto");
const container_acao_txt = document.getElementById("container_acao_txt");
 

container_texto.addEventListener('wheel', function() {
container_acao_txt.style.display ="none";
    
clearTimeout(temporizador);
temporizador = setTimeout(function() {
container_acao_txt.style.display ="flex";
 
}, 1500);
    
})


}



//tanto para salva como para virsualizar
function RenderTitulo() {
    

const titulos = conteiner_titulo.querySelectorAll("h2");
for (let n = 0; n < titulos.length; n++) {
    
if(conteudo_texto[n]){
titulos[n].innerText = conteudo_texto[n].titulo

}
} 


}
 

 