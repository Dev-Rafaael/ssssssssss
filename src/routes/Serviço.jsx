
import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import drink8 from '../assets/drink8.jpg';
import drink9 from '../assets/drink9.jpg';
import drink10 from '../assets/drink10.jpg';
import drink11 from '../assets/drink11.jpg';
import { Link } from 'react-router-dom';
import classes from './Serviço.module.css'

const menuItems = [
  { id: 1, img: drink10, title: "Drinks sem álcool", description: "Bartenders para festas em São Paulo", info: "Bartender para festa Open Bar em São Paulo com 12 opções de Drinks com e sem álcool. Opção ideal para servir crianças e adultos.", price: "A partir de R$550,00" },
  { id: 2, img: drink11, title: "Barman + lista de compras", description: "Mão de obra de Barman para festa", info:"Economize, pague apenas pela mão de obra de Barman para festa e receba uma lista sugestiva de compras de acordo com seu cardápio!", price: "A partir de R$1.689,99" },
  { id: 3, img: drink8, title: "Drinks com e sem álcool", description: "Bartenders para festas em São Paulo", info:"6 opções de Drinks Clássicos + Festival de Caipirinhas com 3 frutas (Limão, Maracujá e Morango) e 3 opções de destilados (Vodka, Saquê e Cachaça).", price: "A partir de R$1.889,99" },
  { id: 4, img: drink9, title: "Pacote de Drinks Clássicos", description: "Bartenders para festas em São Paulo", info:"6 opções de Drinks Clássicos + Festival de Caipirinhas com 3 frutas (Limão, Maracujá e Morango) e 3 opções de destilados (Vodka, Saquê e Cachaça).", price: "A partir de R$550,00" },
];

const formatTitleForURL = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const Serviço = () => {
  const { title } = useParams();
  const formattedTitle = title.replace(/-/g, ' ');
  const item = menuItems.find(item => formatTitleForURL(item.title) === title);

  if (!item) {
    return <div>Item não encontrado</div>;
  }
  const [mainImage, setMainImage] = useState(drink11);
  const thumbnails = [drink10, drink8,drink9];

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <>
    <section>
      <div className={classes.navOrcamento}>
        <h1>{item.title}</h1>
      </div>
    <div className={classes.servicos}>
    <div className={classes.carousel}>
      <div className={classes.mainImage}>
        <img src={mainImage} alt="Imagem Principal" />
      </div>
      <div className={classes.thumbnailImages}>
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Miniatura ${index + 1}`}
            className={classes.thumbnail}
            onClick={() => handleThumbnailClick(src)}
          />
        ))}
      </div>
    </div>
        <div className={classes.servicoContent}>    
        <h3>{item.description}</h3>
        <h2>Pacote {item.title}</h2>
      <p>{item.info}</p>
        <div className={classes.form}>       
          <form action="#">
             <div className={classes.select}>
            <label htmlFor="Horario">Horario Da Festa</label>
            <select name="Horario" id="Horario" required >
             <option value="" disabled selected>Selecione o Horario</option>
              <option value="">3 Horas</option>
              <option value="">4 Horas</option>
              <option value="">5 Horas</option>
            </select>
            </div>
             <div className={classes.select}>
            <label htmlFor="Horario">Nº Convidados:</label>
            <select name="Horario" id="Horario" required>
             <option value="" disabled selected>Selecione uma Opção</option>
              <option value="">Até 50 pessoas</option>
              <option value="">Até 100 pessoas</option>
              <option value="">Superior a 100 pessoas</option>
            </select>
            </div> 
            <div className={classes.select}>
            <label htmlFor="Horario">Nº De Bartenders</label>
            <select name="Horario" id="Horario" required >
             <option value="" disabled selected>Selecione uma Opção</option>
              <option value="3">Apenas 1</option>
              <option value="4">2 Bartenders</option>
              <option value="5">Superior a 2 Bartenders</option>
            </select>

            </div>
          </form>
            <Link to="#" >CONTRATAR</Link>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Serviço;
