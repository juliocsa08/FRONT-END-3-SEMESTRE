
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './components/home/Home'
import MyPage from './components/my page/MyPage'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import { useState } from 'react'
import PrivateRoute from './routes/PrivateRoute'
import ListaProduto from './components/listarproduto/ListaProduto'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
           path="/MyPage"
           
           element ={
             <PrivateRoute>
              <MyPage />
            </PrivateRoute>
           } />          
          
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/produtos" element={<ListaProduto />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
