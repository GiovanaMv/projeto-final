/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom'
import PratoPizza from '../../assets/imagens/prato3-pizza.png'
import PratoMacarrao from '../../assets/imagens/prato1-macarrao.png'
import { Container, Card, Restaurantes } from './styles'

import { useRestaurantes, Produto } from '../../hooks/useRestaurantes'
import ProdutoModal from '../../components/modal-produtos/Modal'
import { useState } from 'react'

function Pratos() {
    const navigate = useNavigate();

    const [modalProduto, setModalProduto] = useState<Produto | null>(null)
    const [modalLoading, setModalLoading] = useState(false)
    const [modalError, setModalError] = useState<string | null>(null)

    function handleAddClick(produtoId: number) {
        setModalLoading(true)
        setModalProduto(null)
        setModalError(null)

        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then((res) => res.json())
            .then((data) => {
                // aqui você pode mudar conforme o formato da API
                const todosProdutos = data.flatMap((rest: any) => rest.cardapio)
                const produto = todosProdutos.find((p: Produto) => p.id === produtoId)

                if (produto) {
                    setModalProduto(produto)
                } else {
                    setModalError('Produto não encontrado')
                }
            })
            .catch(() => setModalError('Erro ao carregar produto'))
            .finally(() => setModalLoading(false))
    }

    // const { produtos, loading, error } = useRestaurantes();
    // const [modalProduto, setModalProduto] = useState<Produto | null>(null);

    // function handleAddClick(produto: Produto) {
    // setModalProduto(produto);
    // }

    // function handleCloseModal() {
    // setModalProduto(null);
    // }

    // function handleConfirm(produto: Produto) {
    // // lógica de adicionar ao carrinho
    // console.log('Adicionado:', produto);
    // }

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

                {modalLoading && <p>Carregando produto...</p>}
                {modalError && <p>{modalError}</p>}

                {modalProduto && (
                    <ProdutoModal
                        produto={modalProduto}
                        onClose={() => setModalProduto(null)}
                        onAddToCart={(p) => {
                            console.log('Adicionado:', p)
                            setModalProduto(null)
                        }}
                    />
                )}


                <Card>
                    <header>
                        <img src={PratoPizza} alt="Prato com comida Japonesa" />
                    </header>
                    <div>
                        <h3>Pizza Marguerita</h3>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button onClick={() => navigate('10')}><a>Adicionar ao carrinho</a></button>
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