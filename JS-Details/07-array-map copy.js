const hobbies = [
    "Ler", 
    "cozinhar", 
    "Cantar", 
    "jogar", 
    "Viajar"

];
 const novosHobbies = hobbies.map((hobby) => {
    return `<p>${hobby}</p>`;
});

console.log(novosHobbies);