// alert('Hello word');
// var numero = 1;

// if (numero == "1") { // compara os valores / conteudos
//     alert('true');
// } else {
//     alert('false');
// }

// if (numero === "1") { // compara o tipo e o valor (ambos devem ser iguais)
//     alert('true');
// } else {
//     alert('false');
// }

// var suco = 3;

// switch (suco) {
//     case 1:
//         alert('fazer 1 copo de suco');
//         break;
//     case 2:
//         alert('fazer uma meia jarra de suco');
//         break;
//     case 3:
//         alert('fazer uma jarra de suco');
//         break;
//     default:
//         alert('opcao default');
// }

// var alunos = ["Bruno", "Bruno1", "Bruno2", "Bruno3", "Bruno4"];

// for (var i = 0; i < alunos.length; i++) {
//     alert(alunos[i]);
// }

// var texto = "";
// var numero = 1;

// while (numero < 10) {
//     texto += numero + "";
//     numero++;
// }
// alert(texto);

// var cont = 0;
// for (let i = 0; i < 100; i++) {

//     cont = cont + i;
//     alert(cont);

// }

// function mostrarpares() {

//     for (let i = 0; i < 100; i++) {

//         if (i % 2 == 0)
//             alert(i);
//     }

// }

// function mostrarsomatorio() {
//     var cont = 0;
//     for (let i = 0; i < 100; i++) {

//         cont = +i;
//     }
// }

// function deixarcaixaalta() {


//     var x = document.getElementById("nome");

//     x.value = x.value.toUpperCase();

// }


function mostrarNome() {

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    alert(nome + " tem " + idade + " anos! ");
}

function maiorIdade() {


    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;


    if (idade > 18) {
        alert(nome + "é maior de idade");
    } else {
        alert(idade + "é menor de idade")
    }

}

function somar() {

    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);


    var property = document.getElementById(btn);

    var result = valor1 + valor2;

    alert(result);


}


function somarcor(botao) {

    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);

    var result = valor1 + valor2;

    if (result % 2 == 0) {
        botao.style.backgroundColor = "#7FFF00"


    } else {
        botao.style.backgroundColor = "#0000ff"

    }
}



//1 - Construa uma pagina com dois inputs do tipo Text (um para nome e outro para idade) e um botão. Ao clicar no botão, mostre uma mensagem como esta: “Juarez tem 22 anos”.

//2 - Construa uma pagina com dois inputs do tipo Text (um para nome e outro para idade) e um botão. Ao clicar no botão, mostre uma mensagem como esta: “Juarez é maior de idade”.

//3 - Construa uma pagina com dois inputs do tipo Text e um botão. Ao clicar no botão, mostre o resultado da soma dos valores atribuídos aos inputs.

//4 - Continuando o exercício anterior, mude a cor do botão para azul se o resultado for par e para verde se for impar.
