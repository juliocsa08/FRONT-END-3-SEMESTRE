import { useState } from 'react'
import './App.css'
import Contador from '../components/contador/contador';
import FormularioState from '../components/formulariostate/formulariostate';
import CadFruta from '../components/cadfruta/cadfruta';
function App() {
  
const [titulo, setTitulo] = useState("Google");

     function mudarTexto() {
        setTitulo("Microsoft");
     }
     function mudarTexto2() {
        setTitulo("Apple");
     }

     return(
    <>
     {/* <h1>minha Pagina de {titulo}</h1>
     <button onClick={mudarTexto}>Mudar Texto</button>
     <br />

     <button onClick={mudarTexto2}>Apple</button> 

      <Contador />
      <FormularioState /> */}
    <CadFruta />

    </>

     );
   }

export default App;
