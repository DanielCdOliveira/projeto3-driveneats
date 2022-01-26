document.getElementById("botao1").disabled = true;

var food1 = document.getElementById("food1");
var food2 = document.getElementById("food2");
var food3 = document.getElementById("food3");
var food4 = document.getElementById("food4");

var drink1 = document.getElementById("drink1");
var drink2 = document.getElementById("drink2");
var drink3 = document.getElementById("drink3");
var drink4 = document.getElementById("drink4");

var confirm = [];

function selectFood(opcao) {
  food1.className = "option";
  food2.className = "option";
  food3.className = "option";
  food4.className = "option";

  opcao.className = "option-selected";
  confirm[0] = true;
}

function selectDrink(opcao) {
  drink1.className = "option";
  drink2.className = "option";
  drink3.className = "option";
  drink4.className = "option";

  opcao.className = "option-selected";
  confirm[1] = true;
}

function selectDessert(opcao) {
  dessert1.className = "option";
  dessert2.className = "option";
  dessert3.className = "option";
  dessert4.className = "option";

  opcao.className = "option-selected";
  confirm[2] = true;
}

var clique = document.getElementsByClassName("option");

function verificar(){
  if(confirm[0] && confirm[1] && confirm[2]){
    document.getElementById("botao1").disabled = false;
}
}

function closeOrder() {
   console.log("ola");
}