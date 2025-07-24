import { useState } from 'react';
import { Entrega } from './styles';

type DeliveryData = {
  nome: string;
  endereco: string;
  cidade: string;
  cep: string;
  numero: string;
  complemento?: string;
};

type Props = {
  onNext: (dadosEntrega: DeliveryData) => void;
};

const Delivery = ({ onNext }: Props) => {
  const [form, setForm] = useState<DeliveryData>({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(form);
  };

  return (
    <Entrega>
      <h2>Entrega</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome"  value={form.nome} onChange={handleChange} required />
        <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} required />
        <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
        <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} required />
        <input name="numero" placeholder="Número" value={form.numero} onChange={handleChange} required />
        <input name="complemento" placeholder="Complemento (opcional)" value={form.complemento} onChange={handleChange} />
        <button type="submit">Continuar com o pagamento</button>
      </form>
    </Entrega>
  );
};

export default Delivery;