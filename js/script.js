let title = document.getElementById("title");
let text = document.getElementById("text");
// numero vazio, que vai receber o valor do número.
let number = 0;
// elementos dos numeros dos cards
let n1 = document.getElementById("1");
let n2 = document.getElementById("2");
let n3 = document.getElementById("3");
let n4 = document.getElementById("4");
let n5 = document.getElementById("5");

function number1() {
  number = 1;
  n1.className = "activeOrange";
  // adicionando cor no numero selecionado e removendo de outros numeros se necessário
  if (n1.className == "activeOrange") {
    n2.className = "inactive";
    n3.className = "inactive";
    n4.className = "inactive";
    n5.className = "inactive";
  }
}

function number2() {
  number = 2;
  n2.className = "activeOrange";
  // adicionando cor no numero selecionado e removendo de outros numeros se necessário
  if (n2.className == "activeOrange") {
    n1.className = "inactive";
    n3.className = "inactive";
    n4.className = "inactive";
    n5.className = "inactive";
  }
}

function number3() {
  number = 3;
  n3.className = "activeOrange";
  // adicionando cor no numero selecionado e removendo de outros numeros se necessário
  if (n3.className == "activeOrange") {
    n1.className = "inactive";
    n2.className = "inactive";
    n4.className = "inactive";
    n5.className = "inactive";
  }
}

function number4() {
  number = 4;
  n4.className = "activeOrange";
  // adicionando cor no numero selecionado e removendo de outros numeros se necessário
  if (n4.className == "activeOrange") {
    n1.className = "inactive";
    n2.className = "inactive";
    n3.className = "inactive";
    n5.className = "inactive";
  }
}

function number5() {
  number = 5;
  n5.className = "activeOrange";
  // adicionando cor no numero selecionado e removendo de outros numeros se necessário
  if (n5.className == "activeOrange") {
    n1.className = "inactive";
    n2.className = "inactive";
    n3.className = "inactive";
    n4.className = "inactive";
  }
}

function send(num) {
  if (number == 0) {
    alert("Please, select a number before sending it");
  } else if (number == 1) {
    num = 1;
  } else if (number == 2) {
    num = 2;
  } else if (number == 2) {
    num = 2;
  } else if (number == 3) {
    num = 3;
  } else if (number == 4) {
    num = 4;
  } else if (number == 5) {
    num = 5;
  }
  alert(num);
}
