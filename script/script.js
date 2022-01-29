// desabilitando o botao
document.getElementById("button1").disabled = true;

// arrays
const confirm = [];
const itemNames = [];
const itemValues = [];

// seleciona os elementos, desmarca selecionados, altera os valores no array e chama funçao "verificar"
function select(divParent, opcao) {
  let index = getIndex(divParent);
  if (opcao.classList.contains("selected")) {
    opcao.classList.remove("selected");
    confirm[index] = false;
  } else {
    const selecionado = document.querySelector("." + divParent + " .selected");

    if (selecionado !== null) {
      selecionado.classList.remove("selected");
    }

    opcao.classList.toggle("selected");

    itemNames[index] = opcao.children[1].innerText;
    itemValues[index] = apenasNumeros(opcao.children[3].innerText) / 100;
    confirm[index] = true;
  }
  verificar();
}

// verifica se as tres opcoes foram escolhidas
function verificar() {
  if (confirm[0] && confirm[1] && confirm[2]) {
    document.getElementById("button1").disabled = false;
    button1.innerText = "Fechar pedido";
    button1.style.fontWeight = "700";
  }
  else{
    document.getElementById("button1").disabled = true;
  }
}

// adiciona os valores ao modal e chama funçao "redirectToWhatsApp"
function closeOrder() {

  let total = itemValues[0] + itemValues[1] + itemValues[2];
  const result = total.toFixed(2);

  food.innerText = itemNames[0];
  drink.innerText = itemNames[1];
  dessert.innerText = itemNames[2];

  food__price.innerText = addVirgula(itemValues[0]);
  drink__price.innerText = addVirgula(itemValues[1]);
  dessert__price.innerText = addVirgula(itemValues[2]);

  resultDisplay.innerText = result.replace(".", ",");

  document.getElementById("modal-closeorder").style = "display:flex;";

  const confirmButton = document.getElementById("button2");

  confirmButton.addEventListener("click", function () {
    redirectToWhatsApp(itemNames, result);
  });
}

// gera os prompts e redireciona para o whatsapp
function redirectToWhatsApp(itemNames, result) {

  const name = prompt("Qual seu nome?");
  const adress = prompt("Qual seu endereço?");

  let message =
    "Olá, gostaria de fazer o pedido:" +
    "\n - Prato: " +
    itemNames[0] +
    "\n - Bebida: " +
    itemNames[1] +
    "\n - Sobremesa: " +
    itemNames[2] +
    "\nTotal: R$ " +
    result;

  if (name != "" || adress != "") {
    message += "\n";
    if (name != "") message += "\nNome: " + name;
    if (adress != "") message += "\nEndereço: " + adress;
  }

  const url = "https://wa.me/5532920002506?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

// fecha o modal
function cancelar() {
  document.getElementById("modal-closeorder").style = "display:none;";
}

// substitui ponto por virgula
function addVirgula(valor) {
  return valor.toFixed(2).replace(".", ",");
}

// remove caractes que nao sao numeros
function apenasNumeros(string) {
  let price = string.replace(/[^0-9]/g, "");
  return parseInt(price);
}

// gera index para os arrays
function getIndex(divParent) {
  switch (divParent) {
    case "foodOptions":
      return 0;
    case "drinkOptions":
      return 1;
    case "dessertOptions":
      return 2;
  }
}
