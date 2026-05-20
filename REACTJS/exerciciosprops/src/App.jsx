
import './App.css'
import Perfil from './Components/Exercicio03/Perfil'
import Produto from './Components/Exercicio02/Produto'
import Title from './Components/Title/title'
import Saudacao from './Components/Exercicio01/saudacao';
import Botao from './Components/Exercicio04/Botao';
import MyChildren from './Components/mychildren/mychildren';
import Filme from './Components/Exercicio05/Filme';
import Produtos from './Components/produtos/produtos';

function App() {
  return (


      /* <Title
        texto="Julio"
        sobrenome="cesar"
      />


      <Title
        texto="Maria"
        sobrenome="cordeiro"
      />



      <Title
        texto="Diogo"
        sobrenome="Aldrovandi"
        idade={17} />


      <Saudacao nome="Julio" />
      <Saudacao nome="Maria" />
      <Saudacao nome="Diogo" /> */

     <MyChildren>


<Produto
  nome="Notebook"
  preco={3500}
  descricao="Notebook Gamer com processador Intel Core i7, 16GB de RAM e placa de vídeo dedicada."
/>
<Produto
  nome="Smartphone"
  preco={1500}
  descricao="Smartphone com tela AMOLED, câmera de alta resolução e bateria de longa duração."
/>
<Produto
  nome="Fone de Ouvido"
  preco={300}
  descricao="Fone de ouvido sem fio com cancelamento de ruído e qualidade de som premium."
/> 


     </MyChildren>



     




     

    /* <MyChildren>
        <Perfil
        nome="Julio"
        idade={17}
        profissao="Desenvolvedor Front-end"
      />
      <Perfil
        nome="Maria"
        idade={25}
        profissao="Designer Gráfico"
      />
      <Perfil
        nome="Diogo"
        idade={30}
        profissao="Engenheiro de Software"
      /> 
      </MyChildren>  
    

      
    <Botao
      texto="Clique aqui"
      cor="red"
    />

    <Botao
      texto="Enviar"
      cor="green"
    />

<Filme
      titulo="O Poderoso Chefão"
      ano={1972}
      genero="Crime, Drama"
      nota={9.2}
     
    />

<Filme
      titulo="A Origem"
      ano={2010}
      genero="Ação, Ficção Científica"
      nota={8.8}
    />

    </>


   <Produtos/>
*/
  );

}

export default App;
