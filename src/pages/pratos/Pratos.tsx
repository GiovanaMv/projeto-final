import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, LoadingOverlay, LoadingText, Card, Restaurantes } from './styles'
import { ModalProduto, type Produto } from '../../components/modal-produtos/ModalProduto'

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Produto[]
}

function Pratos() {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [modalProduto, setModalProduto] = useState<Produto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        const encontrado = data.find((rest) => rest.id === Number(id))
        if (encontrado) {
          setRestaurante(encontrado)
        } else {
          setError('Restaurante não encontrado.')
        }
      })
      .catch(() => setError('Erro ao carregar restaurante.'))
      .finally(() => setLoading(false))
  }, [id])

  const handleAddClick = (produto: Produto) => {
    setModalProduto(produto)
  }

  if (loading) {
    return (
      <LoadingOverlay>
        <LoadingText>Carregando restaurante...</LoadingText>
      </LoadingOverlay>
    )
  }

  if (error || !restaurante) {
    return <p>{error || 'Erro inesperado.'}</p>
  }

  return (
    <>
      <Restaurantes>
        <img src={restaurante.capa} alt={`Imagem do restaurante ${restaurante.titulo}`} />
        <div className="sombra"></div>
        <div className="texto">
          <p>{restaurante.tipo}</p>
          <h3>{restaurante.titulo}</h3>
        </div>
      </Restaurantes>

      <Container>
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

        {restaurante.cardapio.map((prato) => (
          <Card key={prato.id}>
            <header>
              <img src={prato.foto} alt={prato.nome} />
            </header>
            <div>
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
              <button onClick={() => handleAddClick(prato)}>Adicionar ao carrinho</button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Pratos
