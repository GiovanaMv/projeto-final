import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Pratos from './pages/pratos/Pratos'

function App() {

  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pratos' element={<Pratos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
