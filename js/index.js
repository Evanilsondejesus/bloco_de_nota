//configuração global

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
 


  
//tanto para salva como para virsualizar
function RenderTitulo() {
    

const titulos = conteiner_titulo.querySelectorAll("h2");
for (let n = 0; n < titulos.length; n++) {
    
if(conteudo_texto[n]){
titulos[n].innerText = conteudo_texto[n].titulo

}
} 


}
 

 