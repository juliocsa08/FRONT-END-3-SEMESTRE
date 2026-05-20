import './App.css';
import  Homepage from './pages/home/homepage';
import  QuemSomosPage  from './pages/quemsomos/quemsomospage';
import  CadastroProdutoPage  from './pages/cadastroproduto/cadastroprodutopage';
import  CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
export default function App() {
  return (
    <>

   <BrowserRouter>
   <Header />
   <Routes>
    <Route element={<Homepage />} path="/" />
    <Route element={<QuemSomosPage />} path="/quemsomos" />
    <Route element={<CadastroProdutoPage />} path="/produto" />
    <Route element={<CadastroFrutaPage />} path="/fruta" />
   </Routes>
   </BrowserRouter>


   
    </>
  );
}