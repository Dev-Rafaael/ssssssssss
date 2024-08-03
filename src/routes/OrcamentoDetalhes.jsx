// OrcamentoDetalhes.js
import React from 'react';
import { useParams } from 'react-router-dom';
import drink8 from '../assets/drink8.jpg';
import drink9 from '../assets/drink9.jpg';
import drink10 from '../assets/drink10.jpg';
import drink11 from '../assets/drink11.jpg';

const menuItems = [
  { id: 1, img: drink10, title: "Drinks sem álcool", description: "Bartenders para festas, São Paulo", price: "A partir de R$550,00" },
  { id: 2, img: drink11, title: "Barman + lista de compras", description: "Bartenders para festas, São Paulo", price: "A partir de R$1.689,99" },
  { id: 3, img: drink8, title: "Drinks com e sem álcool", description: "Bartenders para festas, São Paulo", price: "A partir de R$1.889,99" },
  { id: 4, img: drink9, title: "Drinks sem álcool", description: "Bartenders para festas, São Paulo", price: "A partir de R$550,00" },
];

const OrcamentoDetalhes = () => {
  const { id } = useParams();
  const item = menuItems.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default OrcamentoDetalhes;
