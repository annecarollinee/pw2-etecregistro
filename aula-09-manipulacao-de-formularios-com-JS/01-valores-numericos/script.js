// Capturando as inputs
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');
    const resultado = document.querySelector('input#resultado');

// Funções da calculadora
function somar(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Somando os valores
    const soma = n1 + n2;
    // Exibindo o resultado
    resultado.value = `${soma}`;
}
function subtrair(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Subtraindo os valores
    const subtrair = n1 - n2;
    // Exibindo o resultado
    resultado.value = `${subtrair}`;
}
function multiplicar(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Multiplicando os valores
    const multiplicar = n1 * n2;
    // Exibindo o resultado
    resultado.value = `${multiplicar}`;
}
function dividir(){
    // Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    // Dividindo os valores
    const dividir = n1 / n2;
    // Exibindo o resultado
    resultado.value = `${dividir}`;
}
function limpar(){
    resultado.value = ``;
}