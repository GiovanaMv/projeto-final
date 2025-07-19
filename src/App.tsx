import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Pratos from './pages/pratos/Pratos'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pratos' element={<Pratos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
