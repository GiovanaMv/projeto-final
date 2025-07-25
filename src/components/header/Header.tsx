import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Logo from '../../assets/imagens/logo.png'
import { HomeHeader, PratosHeader } from './styles'
import { useCart } from '../../contexts/CartContext'
import { CarrinhoLateral } from '../carrinhoLateral/Carrinho';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

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
            <button onClick={() => navigate(-1)}><a>Restaurantes</a></button>
            <img src={Logo} alt="Logo-EFOOD" />
            <button onClick={() => setCarrinhoAberto(true)}>{cartItems.length} produto(s) no carrinho</button>
          </div>
        </PratosHeader>

      )}
      <CarrinhoLateral aberto={carrinhoAberto} onClose={() => setCarrinhoAberto(false)} />

    </>
  )
}

export default Header
