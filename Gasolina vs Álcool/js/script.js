
       const msgResultado = document.querySelector("p");
  
  
       function calcular() {
           const precoGasolina = parseFloat(document.getElementById("gasolina").value);
          const precoAlcool = parseFloat(document.getElementById("alcool").value);
  
          if (isNaN(precoGasolina)) {
              msgResultado.innerHTML = "Preço da Gasolina inválido";
  
              return;
        
          }
           if (isNaN(precoAlcool)) {
               msgResultado.innerHTML = "Preço do Alcool inválido";
              return;
        
      }
  
      console.log(precoAlcool / precoGasolina);
  
      if ((precoAlcool / precoGasolina) >= 0.7)
        msgResultado.innerHTML = "Abasteça com Gasolina";
  
    else
        msgResultado.innerHTML = "Abasteça com Álcool";
     

    }
  