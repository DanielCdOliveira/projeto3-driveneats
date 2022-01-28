document.getElementById("button1").disabled = true;

const confirm = [];
const itemNames = [];
const itemValues = [];

function selectFood(opcao) {
  food1.className = "option";
  food2.className = "option";
  food3.className = "option";
  food4.className = "option";

  opcao.classList.add("selected");
  itemNames[0] = opcao.children[1].innerText;
  itemValues[0] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[0] = true;
}

function selectDrink(opcao) {
  drink1.className = "option";
  drink2.className = "option";
  drink3.className = "option";
  drink4.className = "option";

  opcao.classList.add("selected");

  itemNames[1] = opcao.children[1].innerText;
  itemValues[1] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[1] = true;
}

function selectDessert(opcao) {
  dessert1.className = "option";
  dessert2.className = "option";
  dessert3.className = "option";
  dessert4.className = "option";

  opcao.classList.add("selected");

  itemNames[2] = opcao.children[1].innerText;
  itemValues[2] = apenasNumeros(opcao.children[3].innerText) / 100;

  confirm[2] = true;
}

function verificar() {
  if (confirm[0] && confirm[1] && confirm[2]) {
    document.getElementById("button1").disabled = false;
    button1.innerText = "Fechar pedido";
    button1.style.fontWeight = "700";
  }
}

function closeOrder() {
  const name = prompt("Qual seu nome?");
  const adress = prompt("Qual seu endereço?");

  let total = itemValues[0] + itemValues[1] + itemValues[2];
  const result = total.toFixed(2);

  food.innerText = itemNames[0];
  drink.innerText = itemNames[1];
  dessert.innerText = itemNames[2];

  food__price.innerText = addVirgula(itemValues[0]);
  drink__price.innerText = addVirgula(itemValues[1]);
  dessert__price.innerText = addVirgula(itemValues[2]);

  total.innerText = result;

  document.getElementById("modal-closeorder").style = "display:flex;";

  const confirmButton = document.getElementById("button2");

  confirmButton.addEventListener("click", function () {
    redirectToWhatsApp(itemNames, result, name, adress);
  });
}

function redirectToWhatsApp(itemNames, result, name, adress) {
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
