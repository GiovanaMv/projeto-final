import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Pratos from './pages/pratos/Pratos'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pratos' element={<Pratos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
