// 1️⃣ Função normal nomeada
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`IMC: ${imc.toFixed(2)}`);
}

// 2️⃣ Função anônima (atribuída a uma variável)
const calcularIMCAnonima = function(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`IMC: ${imc.toFixed(2)}`);
};

// 3️⃣ Arrow function
const calcularIMCArrow = (peso, altura) => {
    const imc = peso / (altura * altura);
    console.log(`IMC: ${imc.toFixed(2)}`);
};

// Exemplos de uso:
calcularIMC(70, 1.75);        // Função normal
calcularIMCAnonima(85, 1.80); // Função anônima
calcularIMCArrow(60, 1.65);   // Arrow function


//function saudacao(pessoa, idade){
    //console.log("ola "+pessoa + idade)
//}


//funcao anonima - nao o nome da funcao, mas tem a palavra reservada "function"
//const exibirNota = function(nota){
    //console.log("A minha nota eh: " + nota);
//}
//const somar = (num1,num2) => {
    //console.log(num1,num2)
//}
//somar(10,8)
// cost idade = 29
// exibirNota(10)


