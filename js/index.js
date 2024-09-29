// const new_elemento = document.getElementById("new_chat");
// const conteudo_texto =[]; 
// const conteiner_titulo = document.getElementById("container_titulos");
//const container_conteudo = document.getElementById("container_conteudo");
var temporizador;



// ContainerInit();

 if (sessionStorage.criptografia != undefined || sessionStorage.criptografia != null)
  ContainerAuterado()
else ContainerInit()



new_elemento.addEventListener("click", ()=> {

 if (sessionStorage.criptografia == undefined || sessionStorage.criptografia == null)
  return  ContainerInit()

 Conteudo(null, conteudo_texto.length, null)

}
 );


 


//click do botão h2
conteiner_titulo.addEventListener("click", function(event){
 
const filhos = event.currentTarget.children;
const indiceElementoClicado = Array.from(filhos).indexOf(event.target);
const posicao = indiceElementoClicado;

var titulo = event.target.innerText
corpoTexto  = conteudo_texto[posicao].texto ==''? "": conteudo_texto[posicao].texto;


ConteudoVirsualizado(titulo, posicao, corpoTexto);



})
 

 



 




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
<input type='file' id="image"  requered ><span id="info"></span>



       

<div class="acao_ia" id="acao_ia" tabindex="0">
<button id="sair_acao_ia" >
<img src="imagens/x-circle.svg" alt="" width="30"  >
</button>


<div id="corrir_com_ia" onclick="CorrirIa()" >corrir com Ia</div>
<div  id="gerar_texto_com_ia"     onclick="GeraTextoComIa()">gerar texto para</div>
</div>






<button class="btn-end" id="opcao_ia">
<img src="imagens/menu_opcao.svg" alt="" id="compartilhar">
</button>






<h1 style="text-align:center; cursor: pointer; outline: none;"   contenteditable="true" id="valorTitulo" tabindex="0">${titulo}</h1> 
<textarea name="" id="editor_texto" rows="2"  placeholder="Digite alguma coisa" style="width: 100%; height: 100vh;  background-color: #EBEBEB; border: none; font-size: 20px ">
 </textarea>

<div class="container_acao_txt" id="container_acao_txt"></div>















 `;
container_conteudo.appendChild(mytemplete.content.cloneNode(true));
//const editorTexto = document.getElementById("editor_texto");
 
const adicionar_texto = document.querySelector('#image');
titulo_nota = document.querySelector('#valorTitulo');

let sair = document.getElementById('sair_acao_ia');
let corrir_texto = document.getElementById('corrir_com_ia');
let gerar_texto_com_ia = document.getElementById('gerar_texto_com_ia');
info = document.getElementById('info');


editorTexto = document.getElementById("editor_texto");

let opcao_ia = document.getElementById('opcao_ia');
let acao = document.getElementById('acao_ia');




opcao_ia.addEventListener("click", ()=>{
  
acao.classList.add('acao')

})


 


sair.addEventListener("click", ()=>{
 acao.classList.remove('acao')

})



acao.addEventListener('blur', ()=>{
  acao.classList.remove('acao')


});



corrir_texto.addEventListener('click', ()=>{
   editorTexto.value = "aguarde um instante o texto está sendo corrido..."
   info.innerText = "aguarde um instante o texto está sendo corrido..."
   acao.classList.remove('acao')


});




gerar_texto_com_ia.addEventListener('click', ()=>{
 // titulo_nota.innerText = "correção de Ia";
  editorTexto.value = "aguarde um instante o texto está sendo gerado..."
   info.innerText = "aguarde um instante o texto está sendo gerado..."
    acao.classList.remove('acao')
  
  
  });
  
  
  




adicionar_texto.addEventListener('change', function(e) {
/*
 *** Pegar o texto do bloco de nota no computador
 *** Descriptografa esse texto

*/
 titulo_nota.innerText = "carregando..."
 const tgt = e.target || window.event.srcElement;
 const files = tgt.files;
  
  
    const fr = new FileReader();  
    fr.readAsDataURL(files[0]);  //FileReader armazena a propriedade do elemento na propriedade do objetos
   




if (files && files.length > 0) {


  console.log(files)
  
  const fr = new FileReader();  // Cria um objeto FileReader para ler o arquivo
 
  fr.onload = function(event) {


    const texto = event.target.result;
    const nomeDoArquivo = files[0].name; 



if(sessionStorage.criptografia == undefined){
 
 if (VerificaCriptgrafia(texto) == true) {
  editorTexto.value = "ESSE TEXTO ESTÁ CRIPGRAFADO REGISTRE SUAS CREDENÇIAS PRA PODE DESCRIPTOGRAFA !!";
  titulo_nota.innerText = "TEXTO CRIPGRAFADO !!"

 }else {
  titulo_nota.innerText =  nomeDoArquivo.slice(0, -4);
  editorTexto.value =texto

 }


return
}


decrypt(texto, editorTexto, titulo_nota, nomeDoArquivo, posicao)



  };

  fr.readAsText(files[0]);  // Lê o arquivo como texto

}

  
 

  
 

})


 


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

 

async function download(data, filename, type) {
const file = new Blob([data], {type: type});

     
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);
      
  a.href = url;
  a.download = filename;
  
  document.body.appendChild(a);
  
  a.click();
  
  setTimeout(function() {
     document.body.removeChild(a);
     window.URL.revokeObjectURL(url);  
  },0); 


  
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
 

 



function decrypt(texto,editorTexto, titulo_nota, nomeDoArquivo,posicao) {

//console.log("chegou aqui")

const critptografia =  JSON.parse(sessionStorage.criptografia)

function hexToUint8Array(hex) {
  let bytes = new Uint8Array(Math.ceil(hex.length / 2));
  for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}


 
// Função para importar uma chave de criptografia a partir de uma string hexadecimal
async function importKeyFromHex(hexKey) {
  const rawKey = hexToUint8Array(hexKey);
  const key = await crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: "AES-CBC" }, // Usando AES-CBC aqui
      false,
      ["encrypt", "decrypt"]
  );
  return key;
}
 

// Função para descriptografar o texto criptografado
async function decrypt(encryptedHex, key, ivHex) {
  const iv = hexToUint8Array(ivHex);
  const encryptedData = hexToUint8Array(encryptedHex);
  
  const decryptedData = await crypto.subtle.decrypt(
      { name: "AES-CBC", iv: iv },
      key,
      encryptedData
  );

  return new TextDecoder().decode(decryptedData);
}




// Exemplo de uso com os dados fornecidos
(async () => {
  const keyHex = critptografia[0]; // Chave hexadecimal
  const ivHex = critptografia[1]
  
  console.log("chegou 1")







  try {
    // Importar chave de criptografia
    const key = await importKeyFromHex(keyHex);

    
 const decryptedText = await decrypt(texto, key, ivHex);
 
//console.log("Texto descriptografado:", decryptedText);

editorTexto.value = decryptedText
titulo_nota.innerText =  nomeDoArquivo.slice(0, -4)
conteudo_texto[posicao] = {titulo: titulo_nota.innerText, texto: decryptedText};
RenderTitulo()
 

} catch (error) {
    // Se houver um erro, este bloco será executado
    console.error("Erro ao descriptografar o texto:", error.message);
    
editorTexto.value = "ERRO AO DESCRIPTOGRAFA !! houve uma falha ao descriptografa o texto verique si houve algo problema com a chave foi está correta !!"
titulo_nota.innerText =  "ERRO AO DESCRIPTOGRAFA !!"
conteudo_texto[posicao] = {titulo: titulo_nota.innerText, texto: titulo_nota.innerText};
RenderTitulo()
 
    // Aqui você pode adicionar lógica alternativa, como:
    // - Retornar um valor padrão
    // - Tentar uma operação diferente
    // - Notificar o usuário
}













  
//   // Importar chave de criptografia
//   const key = await importKeyFromHex(keyHex);
 
  
//   const decryptedText = await decrypt(texto, key, ivHex);
 
//   editorTexto.value = decryptedText
//   titulo_nota.innerText =  nomeDoArquivo.slice(0, -4)
//   conteudo_texto[posicao] = {titulo: titulo_nota.innerText, texto: decryptedText};
// RenderTitulo()
 
})();


}






function VerificaCriptgrafia(texto) {
let texto_cortado = texto.substring(0, 10);

//let temNumero = /\d/.test(texto_cortado);
//console.log("A string contém um número?", temNumero);
let numerosEncontrados = texto_cortado.match(/\d/g);


if (numerosEncontrados == null) {
   

  return false
} else if(numerosEncontrados.length >= 3)


return true

{
  
  return false
}









 // return temNumero

}