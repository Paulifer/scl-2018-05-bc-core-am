# Cifrado César

## Preámbulo

Esta aplicacion te permite cifrar o descifrar un texto ingresando un número de desplazamiento.
¿Y para que sirve?
Sirve para tener mensajes secretos. Si cifras un texto te devolvera el texto codificado y ese se los envias a la persona que quiera indicando el numero de desplazamientos que ocupaste y asi esa persona tambien lo podra leer tal cual es.

## Introduccion

Crea una web que pida, por medio de un input text, una frase al usuario y devuelva el mismo mensaje codificado o decodificado según el algoritmo de Cifrado César con el parámetro de desplazamiento de espacios que el usuario decida.

por ejemplo:

• Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ.

• Numero de desplazamientos : 33. 

• Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG.

## Pasos a seguir

•1.-Asegurate de tener un editor de texto.

•2.-Hacer "Fork" o "Clonar" el repositorio en tu terminal.

•3.-Ubicarte en la carpeta donde quieres que quede el repositorios.

•4.-Instala en la carpeta del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).

•5. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.


## Solucionario

Para poder resolver el problema se utilizará:

charCodeAt(); te da un numero en cod. ASCII

String.fromCharCode(); te devuelve la letra desde el cod ASCII

formula para descifrar: (x + n) % 26

formula para cifrar: (x - 65 + n)%26 + 65


Escribir un texto a codificar o decofificar en el input text, luego llamandolo con DOM a app.js y cipher.js.

Indicar numero de desplazamientos

creando funciones => para:
(archivo app.js)
-Boton de Cifrar.
-Boton de Descifrar.
(archivo cipher.js)
Encode, para cifrar.
Decode, para Descifrar.

Imprimiendo la respuesta modificada en un div.




