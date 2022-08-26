//Seleção do display;
const display = document.querySelector("#display");
//Seleção de todos os botões, sejam eles numeros ou operadores;
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    //Verifica se o botão clicado é o clear e limpa o display caso true;
    if (item.id == "clear") {
      display.innerText = "";
      //Verifica se o botão clicado é o backspace, caso true, tranforma o texto do display em string e apaga o ultimo caracter;
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      //Verifica se o texto do display não é vazio, caso true resolve a equação interna do display;
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
      // Verifica se o display está vazio e igual foi clicado, caso positivo informa que está vazio, e apaga após 2 segundos.
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
      //Concatena os valores que forem clicados.
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".color-scheme-toggler");
const calculator = document.querySelector(".calculator");

themeToggleBtn.addEventListener("click", handleTheme);

function handleTheme() {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
}
