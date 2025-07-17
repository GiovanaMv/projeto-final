import { useNavigate } from 'react-router-dom'
import PratoPizza from '../../assets/imagens/prato3-pizza.png'
import { Container, Card } from './styles'

function Pratos() {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('')}><a>Adicionar ao carrinho</a></button>
                    </main>
                </Card>
            </Container>
        </>
    )
}

export default Pratos