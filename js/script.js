// INSERIMENTO NOME 
let nome;
nome = prompt("Qual'è il tuo nome?")


let cognome;
cognome = prompt("Qual'è il tuo cognome?")


let colore;
colore = prompt("il tuo colore preferito?")


let numero;
numero = prompt("Il tuo numero preferito?")


document.getElementById('nome').innerHTML = nome;

document.getElementById('cognome').innerHTML = cognome;

document.getElementById('colore').innerHTML = colore;

document.getElementById('numero').innerHTML = numero;

document.getElementById('password').innerHTML = `${nome}${cognome}${colore}${numero}`