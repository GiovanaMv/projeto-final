import { useLocation } from 'react-router-dom'
import Logo from '../../assets/imagens/logo.png'
import { HomeHeader, PratosHeader } from './styles'

function Header() {
  const location = useLocation();

  return (
    <>

      {location.pathname === '/' && (
        <HomeHeader>
          <div className="informacoes">
            <img src={Logo} alt="Logo-EFOOD" />
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </div>
        </HomeHeader>
      )}

      {location.pathname === '/pratos' && (
        <PratosHeader>
          <div>
            <button><a href="#">Restaurantes</a></button>
            <img src={Logo} alt="Logo-EFOOD" />
            <button><a href="#">0 produto(s) no carrinho</a></button>
          </div>
        </PratosHeader>
      )}

    </>
  )
}

export default Header
