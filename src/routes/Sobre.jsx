import classes from './Sobre.module.css'

// import fachada from'../assets/INFINITY.png'
import drink from '../assets/drink11.jpg'
import drink1 from '../assets/drink10.jpg'
function Sobre() {
  return (
    <> 
    <div className={classes.navSobre}>
      <h1>SOBRE NÓS</h1>
      <p>A cada passo que damos em direção à mudança, descobrimos 
        novas oportunidades para crescer e evoluir.</p>
    </div>
      <div className={classes.sobre}>
    <div className={classes.contentSobre}>
     <img src={drink1} /> 
      <div className={classes.SobreInfo}>    
      <h3>TOP 10 MELHORES PUBS DO <span> BRASIL </span></h3>
      <p>
      A rede Vincci Pub, fundada em 2023, 
      oferece excelência em estrutura e ambiente para se divertir e aproveitar o melhor da vida. Reconhecida localmente 
      pelos serviços de alta qualidade, a Vincci possui instalações modernas, Bartenders qualificados e uma ampla gama de Drinks. Com horários flexíveis, adaptados à sua agenda, descubra seu potencial máximo com mais saúde e disposição. </p>
   </div> 
   </div> 
    <div className={classes.contentSobre}>
    <div className={classes.SobreInfo}>
      <h3 ><span>VIVA O AGORA</span></h3>
      <p>
Nós, da Vincci Pub, abraçamos a filosofia da transformação contínua. Essa crença é o alicerce do nosso negócio. Quando um cliente entra em uma de nossas unidades com o objetivo de se divertir,
 estamos diante de um momento de mudança.
Ao longo dos últimos 20 anos, temos dedicado nossos esforços para cultivar
 essa mentalidade, incentivando nossos clientes a explorarem novos horizontes e a alcançarem 
 o seu potencial máximo. Acreditamos que a mudança é vital para o crescimento pessoal 
 e estamos aqui para apoiar cada passo desse processo. Na Infinity Academia, celebramos a 
 jornada da transformação. </p>

 </div>
   <img src={drink} />
    </div>
    <div className={classes.numeros}>

    </div>

    </div>
    </>
   
  )
}

export default Sobre