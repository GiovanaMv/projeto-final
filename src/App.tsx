import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Pratos from './pages/pratos/Pratos'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Pratos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
