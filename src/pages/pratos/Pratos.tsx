import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Adicione isso
import { useRestaurantes } from '../../hooks/useRestaurantes'; // Use seu hook
import { Container, Card, Restaurantes } from './styles';

import { ModalProduto, type Produto } from '../../components/modal-produtos/ModalProduto';

function Pratos() {
    const { id } = useParams(); // Pegue o ID do restaurante da URL
    const { restaurantes, loading, error } = useRestaurantes();
    const [modalProduto, setModalProduto] = useState<Produto | null>(null);

    // Encontre o restaurante específico
    const restaurante = restaurantes.find(r => r.id === Number(id));

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;
    if (!restaurante) return <div>Restaurante não encontrado</div>;

    const handleAddClick = (produto: Produto) => {
        setModalProduto(produto); // Agora recebe o produto diretamente
    };

    return (
        <>
            <Restaurantes>
                <img src={restaurante.capa} alt={`Capa do ${restaurante.nome}`} />
                <div className='sombra'></div>
                <div className='texto'>
                    <p>{restaurante.tipo}</p>
                    <h3>{restaurante.nome}</h3>
                </div>
            </Restaurantes>

            <Container>
                {restaurante.pratos.map(produto => (
                    <Card key={produto.id}>
                        <header>
                            <img src={produto.foto} alt={produto.nome} />
                        </header>
                        <div>
                            <h3>{produto.nome}</h3>
                            <p>{produto.descricao}</p>
                            <button onClick={() => handleAddClick(produto)}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </Card>
                ))}

                {modalProduto && (
                    <ModalProduto
                        produto={modalProduto}
                        onClose={() => setModalProduto(null)}
                        onAddToCart={(p: unknown) => {
                            console.log('Adicionado:', p);
                            setModalProduto(null);
                        }}
                    />
                )}
            </Container>
        </>
    );
}

export default Pratos;