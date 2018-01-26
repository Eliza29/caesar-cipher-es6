window.addEventListener('load', (() => {
// Cifrado Cesar
// El usuario no podra ingresar un campo vacío o que contenga números
  
  let buttonCipher = document.getElementById('btn-cipher');
  buttonCipher.addEventListener('click', addText);
  function addText() {
    let input = document.getElementById('formGroupInput');
    let phrase = input.value;
    if (phrase || isNaN(phrase)) {
      let cipherText = document.getElementById('cipherText');
      cipherText.textContent = cipher(phrase);
    } 
  }  
  let buttonDecipher = document.getElementById('btn-decipher');
  buttonDecipher.addEventListener('click', decipherText);
  function decipherText() {
    let input = document.getElementById('formGroupInput');
    let phrase = input.value;
    if (phrase || isNaN(phrase)) {
      let decipherText = document.getElementById('cipherText');
      decipherText.textContent = decipher(phrase);
    } 
  } 
  // Creamos la funcion cipher para encriptar el mensaje
  function cipher(phrase) {
    let encryptedString = ''; // Creamos una variable donde se va almacenar la frase encritada
    for (let i = 0; i < phrase.length; i++) {// recorremos por todos los elementos de la frase
      if (phrase.charCodeAt([i]) >= 65 && phrase.charCodeAt([i]) <= 90 && phrase.charCodeAt([i]) !== 32) { // la condicion nos permite devolver mayusculas
        encryptedString += String.fromCharCode((phrase.charCodeAt([i]) - 65 + 33) % 26 + 65);
      } // La formula hace que cada elemento de la frase recorra 33 espacios en el abecedario.
      else if (phrase.charCodeAt([i]) >= 97 && phrase.charCodeAt([i]) <= 122 && phrase.charCodeAt([i]) !== 32) { // la condicion nos permite devolver minusculas
        encryptedString += String.fromCharCode((phrase.charCodeAt([i]) - 97 + 33) % 26 + 97);
      }
    }
    return encryptedString;// Nos da la nueva frase encriptada
  }
  function decipher(phrase) { // Creamos la funcion decipher para decifrar el mensaje
    // let newPhrase = phrase);
    let upperCase = phrase.toUpperCase();
    let decipherString = '';
    for (let i = 0; i < upperCase.length; i++) {
      let string = (upperCase.charCodeAt([i]) + 65 - 33) % 26 + 65;
      let caesar = String.fromCharCode(string);
      decipherString += caesar;
      // if (phrase.charCodeAt([i]) >= 65 && phrase.charCodeAt([i]) <= 90 && phrase.charCodeAt([i]) !== 32) {
      //   decipherString += String.fromCharCode((phrase.charCodeAt([i]) + 65 - 33) % 26 + 65);
      // } else if (phrase.charCodeAt([i]) >= 97 && phrase.charCodeAt([i]) <= 122 && phrase.charCodeAt([i]) !== 32) {
      //   decipherString += String.fromCharCode((phrase.charCodeAt([i]) + 97 - 33) % 26 + 97);
      // }
    }
    return decipherString;
  }
}));