const prompt = require("prompt-sync")();

//Perguntas Sim e Não
console.log('######## Responda #######');
console.log("######## S para sim N para Não ########### ");
console.log("Dependendo das respostas, exibirá um resultado diferente no final ");
console.log('###############');

let cont = 0;

let pergunta1 = prompt("Vc respondera todas perguntas ?  ").toString().toUpperCase();

if (pergunta1 === "S") {
  cont = cont + 1;
} else {
  console.log("Sua resposta foi Não ");
  console.log();
}

let pergunta2 = prompt("Você falha, mas ainda consegue fugir da situação ?  ").toString().toUpperCase();

if (pergunta2 === "S") {
  cont = cont + 1;
} else {
  console.log("Sua resposta foi Não ");
}

let pergunta3 = prompt("Você chega perto de conseguir alcançar seu objetivo ?  ").toString().toUpperCase();

if (pergunta3 === "S") {
  cont = cont + 1;
} else {
  console.log("Sua resposta foi Não ");
}

let pergunta4 = prompt("Depois de muito esforço você conquista seu objetivo ?  ").toString().toUpperCase();

if (pergunta4 === "S") {
  cont = cont + 1;
} else {
  console.log("Sua resposta foi Não ");
}

let pergunta5 = prompt("Você triunfa de maneira inquestionável e seus feitos serão lembrados ?  ").toString().toUpperCase();

if (pergunta5 === "S") {
  cont = cont + 1;
} else {
  console.log("Sua resposta foi Não ");
}

if (cont === 0) {
  console.log("0 respostas Sim: Você falha miseravelmente");
}

if (cont === 1 || cont === 2) {
  console.log("1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.");
}

if (cont === 3) {
  console.log("3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
}

if (cont === 4) {
  console.log("4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
}
if (cont === 0) {
    console.log("5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
  }
