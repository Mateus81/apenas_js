var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis);

var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

// QuerySelector e QuerySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

var lista = document.querySelector('#lista');
console.log(lista);

var title = document.querySelector('#title');
console.log(title);

// TextContent e innerHTML
title.innerHTML = "Testando a alteração.";

var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

subtitle.textContent = "Testando o textContent";

// CreateElement
var novoParagrafo = document.createElement("p");
var texto = document.createTextNode("Este é o meu novo parágrafo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo);

// RemoveChild
var container = document.querySelector('#container');
var p = document.querySelector('#container p');
container.removeChild(p);

var subtitle = document.querySelector('.subtitle');
subtitle.remove();

// AppendChild & InsertBefore
var el = document.createElement("div");
el.classList = "div-criada";
console.log(el);

container.appendChild(el);

var el2 = document.createElement("div");
el2.classList = "div-before";
var el3 = document.querySelector("#container .div-criada");
console.log(el3);
container.insertBefore(el2, el3); // Dois parâmetros

// ReplaceChild
var elemento = document.createElement("h3");
elemento.classList = "testando-classe";
var texto = document.createTextNode("Este é o texto do h3");
elemento.appendChild(texto);
console.log(elemento);

var pai = title.parentNode;
pai.replaceChild(elemento, title); // Dois parâmetros

// Propriedades do Document
console.log(document.body);
console.log(document.head);
console.log(document.URL);