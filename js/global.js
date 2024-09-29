
let conteudo_texto = [];
const conteiner_titulo = document.getElementById("container_titulos");
const container_conteudo = document.getElementById("container_conteudo");
sessionStorage.criptografia;
const new_elemento = document.getElementById("new_chat"); 
var editorTexto;
var titulo_nota;
let info;



//document.getElementById("editor_texto");

 
 

//tanto para salva como para virsualizar
function RenderTitulo() {


    const titulos = conteiner_titulo.querySelectorAll("h2");
   for (let n = 0; n < titulos.length; n++) {
      if(conteudo_texto[n]){
      titulos[n].innerText = conteudo_texto[n].titulo
  
  }
  } 
  
  
  }

async function Criptografar() {
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
            
                  const keyHex = critptografia[0]; // Chave hexadecimal
                  const ivHex = critptografia[1]; // IV hexadecimal
                  
                  // Importar chave de criptografia
                  const key = await importKeyFromHex(keyHex);
                  const encryptedText = await encrypt(editor_texto.value, key, ivHex);
              
                 return encryptedText
                
      
          
          
            }

 
          
function decrypt(texto,editorTexto, titulo_nota, nomeDoArquivo,posicao, caminho_completo, caminho) {
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
       
    
    
    
    
    
    
      try {
        // Importar chave de criptografia
        const key = await importKeyFromHex(keyHex);
        const decryptedText = await decrypt(texto, key, ivHex);
    
    editorTexto.value = decryptedText
    titulo_nota.innerText =  nomeDoArquivo
    conteudo_texto[posicao] = {titulo: titulo_nota.innerText, texto: decryptedText, caminho: caminho, caminho_completo: caminho_completo};
     
    
    RenderTitulo()
     
    
    } catch (error) {
        // Se houver um erro, este bloco será executado
        console.error("Erro ao descriptografar o texto:", error.message);
        
    editorTexto.value = "ERRO AO DESCRIPTOGRAFA !! houve uma falha ao descriptografa o texto verique si houve algo problema com a chave foi está correta !!"
    titulo_nota.innerText =  "ERRO AO DESCRIPTOGRAFA !!"
    conteudo_texto[posicao] = {titulo: titulo_nota.innerText, texto: titulo_nota.innerText};
    RenderTitulo()
      
    }
    
    
     
     
     
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
    
     
    
    }
    
    
    
    