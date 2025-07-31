import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Container, Restaurantes, Card } from './styles'

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
}

function Home() {
  
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((response) => {
        setRestaurantes(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar restaurantes:', error)
      })
  }, [])

  return (
    <Container>
      {restaurantes.slice(0, 6).map((restaurante) => (
        <Restaurantes key={restaurante.id}>
          <Card>
            <header>
              <img src={restaurante.capa} alt={`Imagem do restaurante ${restaurante.titulo}`} />
              <div className="tag-container">
                {restaurante.destacado && (
                  <span className="tag">Destaque da semana</span>
                )}
                <span className="tag secondary">{restaurante.tipo}</span>
              </div>
            </header>
            <main>
              <h3>
                {restaurante.titulo}{' '}
                <strong>
                  {restaurante.avaliacao}
                  <i className="bi bi-star-fill"></i>
                </strong>
              </h3>
              <p>{restaurante.descricao}</p>
              <button onClick={() => navigate(`/pratos/${restaurante.id}`)}>
                <a>Saiba mais</a>
              </button>
            </main>
          </Card>
        </Restaurantes>
      ))}
    </Container>
  )
}

export default Home
