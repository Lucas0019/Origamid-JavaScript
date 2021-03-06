// ID

// getElementById seleciona e retorna elementos do DOM
const animaisSection = document.getElementById('animais');

console.log(animaisSection);


// Classe e Tag
// Seleciona pela classe, retorna uma HTMLCollection
const contatoMostra = document.getElementsByClassName('grid-section');

console.log(contatoMostra);
console.log(contatoMostra[0]);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

console.log(ul);


// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
console.log(animais);

const contato = document.querySelector('#contato');
console.log(contato);

const ultimoItem = document.querySelector('.animais-lista li:last-child');
console.log(ultimoItem);


const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);


// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log(navItem);

//selecionando links internos
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);



// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');
console.log(gridSection);

const listas = document.querySelectorAll('ul');
console.log(listas);

const titulos = document.querySelectorAll('.titulo');
console.log(titulos);

const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais);

// Retorna o segundo elemento
console.log(gridSection[1]);


//Parte 02
// Diferente do getElementsByClassName, a lista aqui é estática

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML); //Atualização Ao vivo
console.log(gridSectionNODE); //Não atualiza


//Array-Like
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. 
// O método de Array forEach() por exemplo, existe apenas em NodeList.

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

gridSection.forEach(function(item, index) {
    console.log(item, index);
})


//Transformando num Array
const arrayGrid = Array.from(gridSectionHTML);


arrayGrid.forEach(function(item) {
    console.log(item);
})