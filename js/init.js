// Pagina inicial onde o usuario colocar sua credenciais ou não pra inicial o aplicativo


  function ContainerInit() { 

    container_conteudo.innerHTML ="";
    const mytemplete = document.createElement("template");
    mytemplete.innerHTML = `
    <form class="container_init">


   <img src="imagens/Ellipse 15.svg" alt="" height="250" >
    <input placeholder="key" name="keyHex" requered >
    <input placeholder="iv"name="keyIv" requered >


    <span style="font-size: 20px;">Texto criptografado: \n O que você desejar escrever hoje?</span>
    <button  id="init_chat" >Novo texto</button>
  <a href="#" id="no_key">continuar sem chave de segurança</span>
    </form> 
    
    `;
    container_conteudo.appendChild(mytemplete.content.cloneNode(true));
    

    

// ipcRenderer.on('open-file', async (event, fileInfo) => {
  
   
//    if(fileInfo != "."){


//   const fileContent = await ipcRenderer.invoke('file:read', fileInfo);
//   const directoryPath = path.dirname(fileInfo);
//   const fileNameWithExt = path.basename(fileInfo);
//   conteudo_texto[0] = {titulo: path.parse(fileNameWithExt).name, texto: fileContent,  caminho: directoryPath, caminho_completo: fileInfo};
        

//   const new_titulo = document.createElement("h2");
//   new_titulo.innerText = path.parse(fileNameWithExt).name;
//   conteiner_titulo.append(new_titulo);
    


//       if (VerificaCriptgrafia(fileContent) == true) {
//          let corpo_nota = "ESSE TEXTO ESTÁ CRIPGRAFADO REGISTRE SUAS CREDENÇIAS PRA PODE DESCRIPTOGRAFA !!";
//          let titulo = "TEXTO CRIPGRAFADO !!";
//          conteudo_texto[0] = {titulo: "TEXTO CRIPGRAFADO !!", texto: corpo_nota,  caminho: "0998", caminho_completo: "//zxxx"};
  

//         ConteudoVirsualizado(titulo, 0, corpo_nota);
//         RenderTitulo()
//         return
//         }






//     RenderTitulo()
//     ConteudoVirsualizado( path.parse(fileNameWithExt).name, 0, fileContent);
    



//    }
 
   

// });

 







     
    const script = document.createElement("script"); 
    script.src = "./Mobile.js";
     
    
    script.onload = function() {
        document.body.appendChild(mytemplete.content.cloneNode(true));
    };
    const ini_chat = document.getElementById("init_chat");
    


 
    







const  sem_chave = document.querySelector("#no_key")
sem_chave.addEventListener("click", ()=>{
 
  Conteudo(null, conteudo_texto.length, null)
  AbrirMenu()
 
})






// credenciais
ini_chat.addEventListener("click", ()=>{

const key = document.getElementsByName('keyHex')[0].value;
const iv = document.getElementsByName('keyIv')[0].value;
 

if(key == ""  || iv == "")  return alert("NÃO PODE ESTÁ VAZIO: \n complete todas as informações")
const criptografia = [key, iv]
sessionStorage.criptografia = JSON.stringify(criptografia)

Conteudo(null, conteudo_texto.length, null)
AbrirMenu()
    
} );
    
    
    
}




