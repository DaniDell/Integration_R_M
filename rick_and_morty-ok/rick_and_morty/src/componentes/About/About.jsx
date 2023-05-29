import style from './About.module.css'
import image from '../../image/dani.jpg';
import React from 'react';

const About = () => {
    return (
        <>
        <h2 className={style.title}>Daniela Dell Acqua - Henry Flex 2023</h2>
        
        
        <div className={style['container']}>

        <p className={style['bio']}> She studied design at Buenos Aires University and UX/UI at Coderhouse. These are her first code lines. </p>
        <a className={style['porfolio']} href="https://www.behance.net/dandellacqua">Visit her Behance</a>
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