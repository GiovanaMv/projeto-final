import Logo from '../../assets/imagens/logo.png'
import { Contatos } from './styles';

function Footer() {

  return (
    <>
    <Contatos>
        <div className="infos">
            <img src={Logo} alt="Logo Efood" />
        <ul>
            <li><i className="bi bi-instagram"></i></li>
            <li><i className="bi bi-facebook"></i></li>
            <li><i className="bi bi-twitter"></i></li>
        </ul>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </div>
    </Contatos>
    </>
  )
}

export default Footer
