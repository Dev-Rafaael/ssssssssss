import React from 'react';
import classes from './orcamento.module.css';
import { Link } from 'react-router-dom';
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

const formatTitleForURL = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

function Unidades() {
  return (
    <>
      <div className={classes.navOrcamento}>
        <h1>ORÇAMENTO</h1>
      </div>
      <section className={classes.section}>
        <h1>ENCONTRE AQUI O <span>PACOTE</span> IDEAL PARA A SUA <span>FESTA</span></h1>
        <div className={classes.sectionContainer}>
          {menuItems.map(item => (
            <div className={classes.orcamentoType} key={item.id}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={classes.orcamentoPreco}>
                <p>{item.price}</p>
              </div>
              <Link to={`/serviço/${formatTitleForURL(item.title)}`}>SAIBA MAIS</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Unidades;

