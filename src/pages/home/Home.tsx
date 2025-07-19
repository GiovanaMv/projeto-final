import { useNavigate } from 'react-router-dom'
import PratoJapones from '../../assets/imagens/parto2-sushi.png'
import PratoMacarrao from '../../assets/imagens/prato1-macarrao.png'

import { Container, Restaurantes, Card  } from './styles'

function Home() {
    const navigate = useNavigate();

  return (
    <>
        <Container>
            <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoJapones} alt="Prato com comida Japonesa" />
                        <div className="tag-container">
                        <span className="tag">Destaque da semana</span>
                        <span className="tag secondary">Japonesa</span>
                    </div>
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill"></i></strong></h3>
                        <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>

            <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoMacarrao} alt="Prato com comida Italiana" />
                        <div className="tag-container">
                        <span className="tag secondary">Italiana</span>
                    </div>
                    </header>
                    <main>
                        <h3>La Dolce Vita Trattoria <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>

             <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoMacarrao} alt="Prato com comida Japonesa" />
                        <div className="tag-container">
                        <span className="tag secondary">Italiana</span>
                    </div>
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill ms-5"></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>

            <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoMacarrao} alt="Prato com comida Japonesa" />
                        <div className="tag-container">
                        <span className="tag secondary">Italiana</span>
                    </div>
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>

             <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoMacarrao} alt="Prato com comida Japonesa" />
                        <div className="tag-container">
                        <span className="tag secondary">Italiana</span>
                    </div>
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill ms-5"></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>

            <Restaurantes>
                <Card>
                    <header>
                        <img src={PratoMacarrao} alt="Prato com comida Japonesa" />
                        <div className="tag-container">
                        <span className="tag secondary">Italiana</span>
                    </div>
                    </header>
                    <main>
                        <h3>Hioki Sushi <strong>4.9<i className="bi bi-star-fill "></i></strong></h3>
                        <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                        <button onClick={() => navigate('./pratos')}><a >Saiba mais</a></button>
                    </main>
                </Card>
            </Restaurantes>
        </Container>
    </>
  )
}

export default Home