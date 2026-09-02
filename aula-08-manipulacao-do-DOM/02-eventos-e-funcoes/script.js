// CAPTURANDO O ELEMENTO DA DOM
const caixaMagica = document.getElementById("caixaMagica");

//  "Escutando" os eventos realizados com o elemnto da DOM
caixaMagica.addEventListener("mouseenter", entradaMouse);
caixaMagica.addEventListener("mouseout", saidaMouse);
caixaMagica.addEventListener("click", clicar)

// Criando uma função
function entradaMouse(){
    caixaMagica.innerText = "Olá, Anne! :)";
    caixaMagica.style.backgroundColor = "blue";
}
function saidaMouse(){
    caixaMagica.innerText = "Tchau, até breve! :(";
    caixaMagica.style.backgroundColor = "red";
}
function clicar(){
    caixaMagica.innerText = "Interaja com a caixa!"
    caixaMagica.style.backgroundColor = "purple";
}