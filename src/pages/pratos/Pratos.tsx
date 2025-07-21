import { useState } from 'react'
import { Container, LoadingOverlay, LoadingText, Card, Restaurantes } from './styles'
import { ModalProduto, type Produto } from '../../components/modal-produtos/ModalProduto'


import  PratoMacarrao  from '../../assets/imagens/prato1-macarrao.png'
import PratoPizza from '../../assets/imagens/prato3-pizza.png'

function Pratos() {
  const [modalProduto, setModalProduto] = useState<Produto | null>(null)
  const [modalLoading, setModalLoading] = useState(false)
  const [modalError, setModalError] = useState<string | null>(null)

  const handleAddClick = async (produtoId: number) => {
    setModalLoading(true)
    setModalProduto(null)
    setModalError(null)

    try {
      const res = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      const data = await res.json()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const todosProdutos = data.flatMap((rest: any) => rest.cardapio || rest.pratos)
      const produto = todosProdutos.find((p: Produto) => p.id === produtoId)

      if (produto) {
        setModalProduto(produto)
      } else {
        setModalError('Produto não encontrado.')
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setModalError('Erro ao buscar produto.')
    } finally {
      setModalLoading(false)
    }
  }

  return (
    <>
      <Restaurantes>
        <img src={PratoMacarrao} alt="Prato com massa Italiana" />
        <div className="sombra"></div>
        <div className="texto">
          <p>Italiana</p>
          <h3>La Dolce Vita Trattoria</h3>
        </div>
      </Restaurantes>

      <Container>
        {modalLoading && (
            <LoadingOverlay>
                <LoadingText>
                    Carregando produto...
                </LoadingText>
            </LoadingOverlay>
        )}
        {modalError && <p>{modalError}</p>}

        {modalProduto && (
          <ModalProduto
            produto={modalProduto}
            onClose={() => setModalProduto(null)}
            onAddToCart={(produto) => {
              console.log('Adicionado ao carrinho:', produto)
              setModalProduto(null)
            }}
          />
        )}

        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Card key={i}>
            <header>
              <img src={PratoPizza} alt="Pizza" />
            </header>
            <div>
              <h3>Pizza Marguerita</h3>
              <p>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida,
                manjericão fresco e um toque de azeite. Sabor e simplicidade!
              </p>
              <button onClick={() => handleAddClick(17)}>Adicionar ao carrinho</button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Pratos
