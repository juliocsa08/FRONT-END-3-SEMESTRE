 import "./produtos.css";
 import Produto from "../Exercicio02/Produto";
 export default function Produtos() {
 const produtos = [
    {
        
        nome: "Fone de Ouvido",
        preco: 300,
        descricao: "Fone de ouvido sem fio com cancelamento de ruído e qualidade de som premium."
 },
 {
        
        nome: "Smartphone",
        preco: 1500,
        descricao: "Smartphone com tela AMOLED, processador potente e câmera de alta resolução."
 },
 
]
    return(
        produtos.map((produtinho) => {
        return(
            <Produto
            nome={produtinho.nome}
            preco={produtinho.preco}
            descricao={produtinho.descricao} 
            />
        )
    })
  )
}