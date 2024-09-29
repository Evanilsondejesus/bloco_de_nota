
// quando o texto é virsualizado
function ConteudoVirsualizado(titulo, posicao, corpoTexto){
 
 
    //const container_conteudo = document.getElementById("container_conteudo");
    container_conteudo.innerHTML ="";
    
    const mytemplete = document.createElement("template");
    mytemplete.innerHTML = `
       

    <h1 style="text-align: center;"  id="valorTitulo" >${titulo}</h1> 
    <textarea name="" id="editor_texto" readonly rows="2" placeholder="Digite seu comentário" style="width: 100%; height: 100vh;  background-color: #EBEBEB; border: none; cursor: default; font-size: 18px ">
    </textarea>
    
    <div class="container_acao_txt" id="container_acao_txt" style="display: flex; gap: 20px;">
    
    <button>
     <img src="imagens/share.svg" alt="" id="compartilhar">
    </button>
    
    <button>
    <img src="imagens/trash3.svg" alt="apagar nota"  id="apagar_nota" >
     </button>
    
     <button>
     <img src="imagens/arrow-down.svg" alt="abaixar nota"  id="abaixar_nota" >
    </button>
    
     <button>
     <img src="imagens/restore.svg" alt="abaixar nota"  id="restore" >
    </button>

    </div>
    
    `;
    //VerificarId()
    
    container_conteudo.appendChild(mytemplete.content.cloneNode(true));
    
    
    const compartilhar = document.getElementById("compartilhar");
    editor_texto = document.getElementById("editor_texto");
    valorTitulo = document.getElementById("valorTitulo");
    const download_nota = document.getElementById("abaixar_nota");
    const restore = document.getElementById("restore");
    



restore.addEventListener("click", ()=>{
sessionStorage.clear();
ContainerInit()

})









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


if (sessionStorage.criptografia != undefined || sessionStorage.criptografia != null)
    ContainerAuterado()
else ContainerInit()


    
    })
    
    
     



download_nota.addEventListener("click", ()=> {


  const titulo_nota =  valorTitulo.innerText;
  valorTitulo.innerText = "Salvando nota aguarde..."

if (sessionStorage.criptografia == undefined) {


    
    setTimeout(() => {
        valorTitulo.innerText = "Atenção o texto foi salvo sem criptografia"

    }, 100);



setTimeout(() => {
  valorTitulo.innerText = titulo_nota
}, 3000);


     
    download(corpoTexto, titulo_nota + ".txt");
       
    return
}



  const critptografia =  JSON.parse(sessionStorage.criptografia)
        
            function hexToUint8Array(hex) {
              let bytes = new Uint8Array(Math.ceil(hex.length / 2));
              for (let i = 0; i < bytes.length; i++) {
                  bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
              }
              return bytes;
          }
          
          // Função para converter Uint8Array em uma string hexadecimal
          function uint8ArrayToHex(uint8Array) {
              return Array.from(uint8Array)
                  .map(byte => byte.toString(16).padStart(2, '0'))
                  .join('');
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
          
          // Função para criptografar o texto
          async function encrypt(text, key, ivHex) {
              const iv = hexToUint8Array(ivHex);
              const encodedText = new TextEncoder().encode(text);
              
              const encryptedData = await crypto.subtle.encrypt(
                  { name: "AES-CBC", iv: iv },
                  key,
                  encodedText
              );
          
              return uint8ArrayToHex(new Uint8Array(encryptedData));
          }
          
         
          // Exemplo de uso com os dados fornecidos
          (async () => {
              const keyHex = critptografia[0]; // Chave hexadecimal
              const ivHex = critptografia[1]; // IV hexadecimal
              
              // Importar chave de criptografia
              const key = await importKeyFromHex(keyHex);
              const encryptedText = await encrypt(editor_texto.value, key, ivHex);
             
              let texto = encryptedText;
              let titulo = titulo_nota;
              let blob = new Blob([texto], { type: "text/HTML;charset=utf-8" });
              download(blob, titulo + ".txt");
       
 
          })();
          


 
      
      
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
    

