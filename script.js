console.log("hello world")

function print(msg) {
    console.log(msg)
}

//questão 11
//Verificação de Número Positivo ou Negativo
let n = -7 
function VerficarSinal(num) {
    if (num > 0){
    print (num + "é positivo");
    } else {   
        print (num + " é negativo");
    }
}
    VerficarSinal(n)

//questão 12
//Função para Converter Celsius em Fahrenheit
let temperatura = 40
function Converter(num) { 
    if ((num * 9/5)+32) {
        let fahrenheit = ((num * 9/5)+32)
        print (num + " está convertido para Fahrenheit: " + fahrenheit);
    }
}
    Converter(temperatura)

//questão 13
//Laço While para Somatório

//questão 14
//Substituição de Palavras em String
function substituirPalavra(text){
    console.log(text.replace(/azul/g, "vermelho"));
}
    let texto = prompt("Digite o texto:");
    substituirPalavra(texto)

//questão 15
//Verificação de Tamanho de String

//questão 16
//Criando e Acessando Array
let frutas = ["Maçã", "Banana", "Laranja", "Pitaía", "Jabuticaba"];
print (frutas[2])

//questão 17

//questão 18

//questão 19

//questão 20
//Contagem de Vogais


//questão 21

//questão 22
//Função para Dobrar Números
let number = 16
function DobrarNumero (num) {
    if (num * 2){
        let numero = (num * 2)
        print (num + ", o dobro deste número é: " + numero)
    }
}
    DobrarNumero (number)

//questão 23

//questão 24

//questão 25