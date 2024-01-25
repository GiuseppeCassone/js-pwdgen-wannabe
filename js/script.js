// INSERIMENTO NOME 
let nome;
nome = prompt("Qual'è il tuo nome?")


let cognome;
cognome = prompt("Qual'è il tuo cognome?")


let colore;
colore = prompt("il tuo colore preferito?")


let numero;
numero = prompt("Il tuo numero preferito?")


document.getElementById('password').innerHTML = `La tua password generata è ${nome}${cognome}${colore}${numero}`