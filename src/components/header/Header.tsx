import Logo from '../../assets/imagens/logo.png'
import { Banner } from './styles'

function Header() {

  return (
    <>
      {location.pathname === '/' && (
        <Banner>
          <div className="informacoes">
            <img src={Logo} alt="Logo-EFOOD" />
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </div>
        </Banner>
      )}

    </>
  )
}

export default Header
