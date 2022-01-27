document.getElementById("button1").disabled = true;

var confirm = [];

const icon = document.createElement("ion-icon")
console.log(icon)









function selectFood(opcao) {
  food1.className = "option";
  food2.className = "option";
  food3.className = "option";
  food4.className = "option";

  opcao.innerHtml 
  opcao.classList.add("selected");
  confirm[0] = true;
}

function selectDrink(opcao) {
  drink1.className = "option";
  drink2.className = "option";
  drink3.className = "option";
  drink4.className = "option";

  opcao.classList.add("selected");
  confirm[1] = true;
}

function selectDessert(opcao) {
  dessert1.className = "option";
  dessert2.className = "option";
  dessert3.className = "option";
  dessert4.className = "option";

  opcao.classList.add("selected");

  confirm[2] = true;
}

var clique = document.getElementsByClassName("option");

function verificar() {
  button1.innerText = "Fechar pedido";
  button1.style.fontWeight = "700";
  if (confirm[0] && confirm[1] && confirm[2]) {
    document.getElementById("button1").disabled = false;
  }
}

function closeOrder() {
  document.getElementById("modal-closeorder").style = "display:flex;";
}
function cancelar() {
  document.getElementById("modal-closeorder").style = "display:none;";
}
