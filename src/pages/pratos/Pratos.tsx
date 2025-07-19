import { useNavigate } from 'react-router-dom'
import PratoPizza from '../../assets/imagens/prato3-pizza.png'
import PratoMacarrao from '../../assets/imagens/prato1-macarrao.png'
import { Container, Card, Restaurantes } from './styles'

function Pratos() {
    const navigate = useNavigate();

    return (
        <>
        <Restaurantes>
            <img src={PratoMacarrao} alt="Prato com massa Italiana" />
            <div className='sombra'></div>
            <div className='texto'>
                <p>Italiana</p>
                <h3>La Dolce Vita Trattoria</h3>
            </div>
        </Restaurantes>
            <Container>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('#')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Pratos