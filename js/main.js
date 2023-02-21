const userName = prompt("Inserisci il tuo nome");

console.log(userName);

const userSurname = prompt("Inserisci il tuo cognome");

console.log(userSurname);

const userFaveColor = prompt("Inserisci il tuo colore preferito");

console.log(userFaveColor);

document.getElementById('password').innerHTML = `${userName}${userSurname}${userFaveColor}23`;

