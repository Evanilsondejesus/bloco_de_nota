






async function CorrirComIa() {


    const url = 'https://bloco-notas-ia.glitch.me/corrir-texto';
    const dataToSend = {
      texto: editor_texto.value,
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST', // Define o método como POST
        headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo
        },
        body: JSON.stringify(dataToSend), // Converte os dados para JSON
      });
  
      const text = await response.text(); // Obtenha a resposta como texto
      console.log(text); // Veja o que está sendo retornado
      editor_texto.value = ''
      
      editor_texto.value = text
      info.innerText = ""
    } catch (error) {



      console.error('Erro:', error); // Lida com erros
    }
  }
  


  async function GeraTextoComIa() {
 
        const url = 'https://bloco-notas-ia.glitch.me/gerar-texto';
        const dataToSend = {
          texto: titulo_nota.innerText,
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST', // Define o método como POST
            headers: {
              'Content-Type': 'application/json', // Define o tipo de conteúdo
            },
            body: JSON.stringify(dataToSend), // Converte os dados para JSON
          });
      
          const text = await response.text(); // Obtenha a resposta como texto
          console.log(text); // Veja o que está sendo retornado
          editor_texto.value = ''
          
          editor_texto.value = text
          info.innerText = ""
        } catch (error) {
    
    
    
          console.error('Erro:', error); // Lida com erros
        }
      }
      