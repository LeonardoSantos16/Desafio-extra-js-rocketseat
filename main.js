
// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function exercicio1(){
    alert("Hello world!")
}


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function exercicio2(){
    let value1 = Number(prompt("Digite o primeiro valor: "))
    let value2 = Number(prompt("Digite o segundo valor: "))
    function sum(value1, value2){
        return "A soma dos dois números é: " + (value1 + value2);
    }
    alert(`O resultado da soma dos numeros ${value1} e ${value2} é: ${value1+ value2}`)
}


// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function exercicio3(){
    let num = 14;
    if(typeof num == typeof 1){
        alert("É um número")
    }else{
        alert("Não é um número")
    }
}


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function exercicio4(){
    let value1 = 14;
    if(typeof value1 == typeof " "){
        alert("É uma string")
    }else{
        alert("Não é uma string")
    }
}


// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function exercicio5(){
    let valueBool = false;
    if(typeof valueBool == typeof true){
        alert("É um booleano")
    }else{
        alert("Não é um booleano")
    }
}


// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function exercicio6(){
    function subtraction(value1, value2){
        return "A subtração dos dois números é: " + (value1 - value2);
    }
    let value1 = Number(prompt("Digite o primeiro valor: "))
    let value2 = Number(prompt("Digite o segundo valor: "))
    alert(subtraction(value1, value2))
}


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function exercicio7(){
    function multiplication(value1, value2){
        return "A multiplicação entre os números é: " + (value1 * value2);
    }
    let value1 = Number(prompt("Digite o primeiro valor: "))
    let value2 = Number(prompt("Digite o segundo valor: "))
    alert(multiplication(value1, value2))
}


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function exercicio8(){
    function division(value1, value2){
        return "A divisão entre os dois números é: " + (value1 / value2).toFixed(2);
    }
    let value1 = Number(prompt("Digite o primeiro valor: "))
    let value2 = Number(prompt("Digite o segundo valor: "))
    alert(division(value1, value2))
}


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par
function exercicio9(){
    function par(value1){
        if(value1 % 2 == 0){
            return "É um número par"
        }else{
            return "Não é um número par"
        }
    }
    let value1 = Number(prompt("Digite um valor: "))
    alert(par(value1));
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar"
function exercicio10(){
    function impar(value1){
        if(value1 % 2 == 1){
            return "É um número impar"
        }else{
            return "Não é um número impar"
        }
    }

    let value1 = Number(prompt("Digite um valor: "))
    alert(impar(value1))
}

exercicio10();
