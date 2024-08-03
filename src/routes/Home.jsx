import drink3 from '../assets/drink7.jpg'
import drink2 from '../assets/drink6.jpg'
import drink1 from '../assets/drink10.jpg'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${classes.customArrow}`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: true,
  };
  return (
    <>
  
  <div className={classes.home}>
  <Slider {...settings} className={classes.imgHome}>
  <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink1} alt="Drink 1" className={classes.img} />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink2} alt="Drink 2" className={classes.img} />
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={drink3} alt="Drink 3" className={classes.img} />
            </div>
          </div>
      </Slider>
      <div className={classes.contentHome}>
      <h1>Bem Vindo Ao <span> Vincci PUB</span></h1>
      <h3>Deliciosos Drinks</h3>
      <div className={classes.btn}>
        <Link to={"/images/"}>Nossos Serviços</Link>
        <Link>Faça Seu Pedido</Link>
        </div>
      </div>
      <div className={classes.video}>
        <h1>WW</h1>
      <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox pulsating-play-btn"></a>
          </div>
      </div>
    </div>
    <section className={classes.section}>  
      <div className={classes.sectionTitle} data-aos="fade-up">
        <h1>Serviços <span>________</span></h1>
        <h2>Drinks com e sem álcool</h2>
      </div>
 <div className={classes.container}>
     
            <div className={classes.cardItem}>
            <span><i class="bi bi-cup-straw"></i></span>
              <h4>Bar de caipirinhas</h4>
              <p>Diversas outras combinações de Frutas e Especiarias para Caipirinhas que agradarão todos os seus convidados!</p>
              <Link>Ver Preços</Link>
            </div>
               
            <div className={classes.cardItem}>
            <span><i class="bi bi-cup-straw"></i></span>
              <h4>Bar de caipirinhas</h4>
              <p>Gin Tônica, Aperol Spritz e diversos outros drinks perfeitos para festas que demandam Elegância e Sofisticação.</p>
              <Link>Ver Preços</Link>
            </div>

            <div className={classes.cardItem}>
            <span><i class="bi bi-cup-straw"></i></span>
              <h4>Bar de caipirinhas</h4>
              <p>Grande variedade de Drinks e sabores não alcoólicos para agradar à todos os paladares e conquistar todos os seus convidados. Sem exceções.</p>
              <Link>Ver Preços</Link>
            </div>
               
      </div>
    </section>

    <main >
    <div className={classes.content}>
      <p className={classes.contrateNos}></p>
    <h3>Sua festa tratada com</h3>
    <h4>Profissionalismo e Respeito</h4>
    <p> Bartenders para aniversários, casamentos, ou qualquer outra comemoração importante para você.
       Estamos prontos para servir todos os seus convidados
       com deliciosos drinks com e sem álcool. Conte com os melhores bartenders para o 
       melhor dia da sua vida!</p>
                <div className={classes.contentBtn}>
            <Link to={"/Orçamento-Eventos/"}>CONTRATE A VINCCI PUB</Link>
            </div>  
      </div>
    <div className={classes.contentvideo}>
    <video  controls>
    <source src="https://www.youtube.com/watch?v=GwS5ASoSQos&list=RD6HDeGYiIKnc&index=26" type="video/mp4"/>
    Seu navegador não suporta a tag de vídeo.
  </video>
  
    </div>
  
  </main>
  
  <section className={classes.sectionPacotes}> 
  <div className={classes.pacoteTitle} data-aos="fade-up">
        <h1>Pacotes <span>________</span></h1>
        <h2>Encontre o pacote de drinks ideal para a sua festa</h2>
      </div>
    <div className={classes.sectionContainer}>   
    <div className={classes.pacotes}>
            <img src={drink1}  />
              <h2>Drinks sem álcool</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
              <p >A partir de R$550,00</p>
              </div>
              <Link  to={""}>SAIBA MAIS</Link>
        </div>
         <div className={classes.pacotes}>
            <img src={drink2}  />
              <h2>Barman + lista de compras</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
              <p >A partir de R$1.689,99</p>
              </div>
              <Link to={""}>SAIBA MAIS</Link>
        </div> 
        <div className={classes.pacotes}>
            <img src={drink3}  />
              <h2>Drinks com e sem álcool</h2>
              <p>Bartenders para festas, São Paulo</p>
              <div className={classes.pacotePreco}>
              <p >A partir de R$550,00</p>
              </div>
            <Link to={""}>SAIBA MAIS</Link>
        </div>
    </div>
    <div className={classes.maispacote}>
      <Link to={"/Orçamento-Eventos/"}>VEJA MAIS PACOTES PARA FESTAS</Link>
    </div>
  </section>
  <main >
    <div className={classes.sobre}>
      <p className={classes.sobreNos}>Buscando eventos de qualidade?</p>
    <h3>MUITO PRAZER, SOMOS A <span> VINCCI PUB</span></h3>
    <p> Fundada em 2003, a <span> vincci</span> tem como missão oferecer o melhor ambiente e 
            estrutura para que você possa se divertir. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestias esse! Accusamus quibusdam quam suscipit reprehenderit consequuntur? Commodi id hic ipsam ducimus neque quasi 
           </p>
                <div className={classes.sobreBtn}>
            <Link to={"/sobre/"}>SAIBA MAIS</Link>
            </div>  
      </div>
    <div className={classes.sobrefotos}>
    <img src={drink3}  />
    </div>
  
  </main>
  
  
    </>
  )
}

export default Home