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

document.write(`<br> No 2º parágrafo do site está escrito assim: ${p1.innerText}`);