// JAVASCRIPT

// Selecionando um elemento pela Tag
const p0 = window.document.getElementsByTagName('p')[0];

// Alterando as características do elemento
p0.style.color = "yellow";
p0.innerText = "Mudei o texto :)";

const p1 = document.getElementsByTagName("p")[1];
p1.style.color = "red";

// Capturando o corpo do site
const corpoSite = window.document.body;
// Mudando a sua cor
corpoSite.style.background = "#2f2f2f";

// Acessando o conteúdo de um elemento DOM
document.write(`<br> No 2º parágrafo do site está escrito assim: ${p1.innerText}`);

// Exercicio
const p3 = document.getElementById("roxo");
p3.style.backgroundColor = "purple";
p3.innerText = "Selecionando elementos pelo ID";

const p4 = document.getElementsByName("azul");
p4.style.backgroundColor = "blue";
p4.innerText = "Selecionando elementos pelo NOME";





