import React, { useState } from "react";
function FormularioState() {
    const [Nome, setNome] = useState("sem texto");
    const [sobrenome, setSobrenome] = useState("");


    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value);
    }
    return (
        <div>
            <h2>Formulário com State</h2>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(evento) =>
                    setNome(evento.target.value)}

            />
            <input
                type="text"
                placeholder="Digite seu sobrenome"
                onChange={pegarSobrenome}
            />


            <br />
            <label htmlFor="">Nome digitado: <strong>{Nome}</strong></label>
            <label htmlFor=""> <strong>{sobrenome}</strong></label>
        </div>
    )

}

export default FormularioState;