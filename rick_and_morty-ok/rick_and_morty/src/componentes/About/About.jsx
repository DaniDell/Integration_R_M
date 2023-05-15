import style from './About.module.css'
import image from '../../image/dani.jpg';

const About = () => {
    return (
        <>
        <h2 className={style.title}>Daniela Dell Acqua, estudiante Henry Flex 2023</h2>
        
        
        <div className={style['container']}>
        <p className={style['bio2']}> A Daniela le encantan los desafíos y programar es uno de ellos. </p>
        <p className={style['bio']}> Estudió diseño en la Universidad de Buenos Aires y UX/UI en Coderhouse. Al finalizar su formación en Henry espera poder colaborar con proyectos que integren sus saberes previos y hará foco en la accesibilidad digital. </p>
        <a className={style['porfolio']} href="https://www.behance.net/dandellacqua">Visitar mi perfil en Behance</a>
        <img 
            src={image} 
            alt="Dani" 
            className={style.Img} 
         /> 
        
        </div>  
          
        </>
    )
}

export default About;