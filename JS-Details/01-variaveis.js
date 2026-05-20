const nome = "João";
let sobrenome = "Silva";

nome = "Maria"; // Isso causará um erro, pois 'nome' é uma constante
console.log(`Olá, ${nome} ${sobrenome}!`);