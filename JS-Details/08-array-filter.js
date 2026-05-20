const numeros = [5, 10, 15,];

const encontrado = numeros.filter((n) => {
    return n == 100;
});

// console.log(encontrado);

const estoque = [
    {
        descricao : "camisa polo",
        cor : "Azul",
        perfil : "M",
        Quantidade : 10
    },
    {
        descricao : "camisa polo",
        cor : "Vermelha",
        perfil : "F",
        Quantidade : 15
    },
    {
        descricao : "camisa polo",
        cor : "Verde",
        perfil : "M",
        Quantidade : 30
    },
    {
        descricao : "camisa polo",
        cor : "Roxa",
        perfil : "F",
        Quantidade : 5
    }
];

 const camisetasFemininas = estoque.filter((camiseta) => {
    return camiseta.perfil == "F";
});
console.log("camisetas Femininas em estoque:")
console.log(camisetasFemininas);

console.log();

camisetasFemininas.forEach((item) => {
    console.log(`${item.cor}: ${item.Quantidade} unidades`);
});