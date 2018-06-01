/*aca va codifico y decofico*/
  window.cipher = {
    encode: (text,displacement) => {
    /* Acá va tu código */
    let textEncode = "";
  //recorriendo el texto  
    for(let i = 0; i<text.length; i++){
  	 if (text.charCodeAt(i) === 32) /*32 es el espacio en codigo ascii, es para que lo cuente*/{
  		textEncode += ' ';
  	 }else{
  	 let textCharCode = (text.charCodeAt(i) - 65 + parseInt(displacement))%26 + 65;
  	 textEncode += String.fromCharCode(textCharCode);
  	 }
    }
 		return textEncode;
},
   decode: (text,displacement) => {
    /* Acá va tu código */
      let textDecode = "";
    //recorriendo el texto  
    for(let i = 0; i<text.length; i++){
  	 if (text.charCodeAt(i) === 32) /*32 es el espacio en codigo ascii, es para que lo cuente*/{
  		textDecode += ' ';
  	 } else{
  	 let textCharCode = (text.charCodeAt(i) + 65 - parseInt(displacement))%26 +65;
  	 textDecode += String.fromCharCode(textCharCode);
  	 }
    }
 
		return textDecode;
  }

} 
