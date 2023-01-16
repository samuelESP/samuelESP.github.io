function typingAnimation() {
    const type = document.querySelector(".typing-animation");
    type
    function typing(text, contador) {
      
        if (contador < text.length) {
        setTimeout(() => {
          type.textContent += text.charAt(contador);//text[contador] também daria certo, o importante é ele idicar qual é a minha posição no text
          contador++;
          typing(text, contador);
        }, 89);
      }
    }
    
    typing('Samuel Espíndola', 0);
  }


export{
 typingAnimation
}
