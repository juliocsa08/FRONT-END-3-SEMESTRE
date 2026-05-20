import "./Produto.css"

function Produto({nome, preco, descricao}) {
    return(

        <p className="card-produto">
            <spam className = "card-linha">
                <strong>Nome:</strong> {nome}
            </spam>
            <spam className = "card-linha">
                <strong>Preço:</strong> R$ {preco.toFixed(2)}
            </spam>
            <spam className = "card-linha">
                <strong>Descrição:</strong> {descricao}
            </spam>
            
        </p>
    )


}

export default Produto