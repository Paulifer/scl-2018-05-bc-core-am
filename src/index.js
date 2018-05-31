/* Acá va tu código */
/*aca va dom*/

window.onload = function() {
// Botón para la función de cifrar.
const btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener("click", function (){
  let text = document.getElementById("boxText").value; 
  let displacement = document.getElementById("boxNum").value; 
  window.cipher.encode(text, displacement); 
});


// Botón para la función  descifrar.
const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener("click", function (){
  let text = document.getElementById("boxText").value; 
  let displacement = document.getElementById("boxNum").value; 
  window.cipher.encode(text, displacement); 
  });
}
