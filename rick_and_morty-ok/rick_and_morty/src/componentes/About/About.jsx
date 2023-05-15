import style from './About.module.css'
import image from '../../image/dani.jpg';

const About = () => {
    return (
        <>
        <h2 className={style.title}>Daniela Dell Acqua, estudiante Henry Flex 2023</h2>
        
        
        <div className={style['container']}>
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