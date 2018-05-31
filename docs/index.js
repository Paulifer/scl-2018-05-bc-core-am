/* Acá va tu código */
/*aca va dom*/

	  window.onload = function() {
// Botón Codificar
	   const btnCifrar = document.getElementById('btnCifrar');
	   btnCifrar.addEventListener("click", function (){
  	 let text = document.getElementById("boxText").value;
     text= text.toUpperCase(); 
  	 let displacement = document.getElementById("boxNum").value; 
  	document.getElementById('boxNewText').innerHTML = window.cipher.encode(text, displacement); 


});


// Botón Decodificar
	   const btnDescifrar = document.getElementById('btnDescifrar');
	   btnDescifrar.addEventListener("click", function (){
  	 let text = document.getElementById("boxText").value; 
     text= text.toUpperCase(); 
  	 let displacement = document.getElementById("boxNum").value; 
  	 document.getElementById('boxNewText').innerHTML = window.cipher.decode(text, displacement); 
  });
}