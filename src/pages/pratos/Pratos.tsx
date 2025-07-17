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
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill"></i></strong></h3>
                        <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Italiana" />
                    </header>
                    <main>
                        <h3>La Dolce Vita Trattoria <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill ms-5"></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill ms-5"></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Container>
        </>
    )
}

export default Pratos