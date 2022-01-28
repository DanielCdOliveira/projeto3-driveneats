// document.getElementById("button1").disabled = true;

// const confirm = [];
// const names = [];
// const values = [];

// function selectFood(opcao) {
//   food1.className = "option";
//   food2.className = "option";
//   food3.className = "option";
//   food4.className = "option";

//   opcao.classList.add("selected");
//   names[0] = opcao.children[1].innerText;
//   values[0] = (apenasNumeros(opcao.children[3].innerText))/100;

//   confirm[0] = true;
// }

// function selectDrink(opcao) {
//   drink1.className = "option";
//   drink2.className = "option";
//   drink3.className = "option";
//   drink4.className = "option";

//   opcao.classList.add("selected");

//   names[1] = opcao.children[1].innerText;
//   values[1] = (apenasNumeros(opcao.children[3].innerText))/100;

//   confirm[1] = true;
// }

// function selectDessert(opcao) {
//   dessert1.className = "option";
//   dessert2.className = "option";
//   dessert3.className = "option";
//   dessert4.className = "option";

//   opcao.classList.add("selected");

//   names[2] = opcao.children[1].innerText;
//   values[2] = (apenasNumeros(opcao.children[3].innerText))/100;

//   confirm[2] = true;
// }

// var clique = document.getElementsByClassName("option");

// function verificar() {
//   if (confirm[0] && confirm[1] && confirm[2]) {
//     document.getElementById("button1").disabled = false;
//     button1.innerText = "Fechar pedido";
//     button1.style.fontWeight = "700";
//   }
// }

// function closeOrder() {
//   let resultado = values[0] + values[1]+ values[2];

//   food.innerText = names[0];
//   drink.innerText = names[1];
//   dessert.innerText = names[2];

//   food__price.innerText = values[0];
//   drink__price.innerText = values[1];
//   dessert__price.innerText = values[2];

//   total.innerText = resultado;

//   document.getElementById("modal-closeorder").style = "display:flex;";
// }

// function cancelar() {
//   document.getElementById("modal-closeorder").style = "display:none;";
// }

// function apenasNumeros(string)
// {
//     let price = string.replace(/[^0-9]/g,'');
//     return parseInt(price);
// }

document.getElementById("button1").disabled = true;

const confirm = [];
const names = [];
const values = [];

function selectFood(opcao) {
  food1.className = "option";
  food2.className = "option";
  food3.className = "option";
  food4.className = "option";

  opcao.classList.add("selected");
  names[0] = opcao.children[1].innerText;
  values[0] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[0] = true;
}

function selectDrink(opcao) {
  drink1.className = "option";
  drink2.className = "option";
  drink3.className = "option";
  drink4.className = "option";

  opcao.classList.add("selected");

  names[1] = opcao.children[1].innerText;
  values[1] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[1] = true;
}

function selectDessert(opcao) {
  dessert1.className = "option";
  dessert2.className = "option";
  dessert3.className = "option";
  dessert4.className = "option";

  opcao.classList.add("selected");

  names[2] = opcao.children[1].innerText;
  values[2] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[2] = true;
}

var clique = document.getElementsByClassName("option");

function verificar() {
  if (confirm[0] && confirm[1] && confirm[2]) {
    document.getElementById("button1").disabled = false;
    button1.innerText = "Fechar pedido";
    button1.style.fontWeight = "700";
  }
}

function closeOrder() {
  let resultado = values[0] + values[1] + values[2];

  food.innerText = names[0];
  drink.innerText = names[1];
  dessert.innerText = names[2];

  food__price.innerText = addVirgula(values[0]);
  drink__price.innerText = addVirgula(values[1]);
  dessert__price.innerText = addVirgula(values[2]);

  total.innerText = addVirgula(resultado);

  document.getElementById("modal-closeorder").style = "display:flex;";
}

function cancelar() {
  document.getElementById("modal-closeorder").style = "display:none;";
}

function addVirgula(valor) {
  return valor.toFixed(2).replace(".", ",");
}

function apenasNumeros(string) {
  let price = string.replace(/[^0-9]/g, "");
  return parseInt(price);
}
