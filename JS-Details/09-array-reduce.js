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

let totalCamisetasEmEstoque = estoque.reduce((total, produto) => {
    return total + produto.Quantidade;
}, 0);

console.log(`Total de camisetas em estoque: ${totalCamisetasEmEstoque}`);