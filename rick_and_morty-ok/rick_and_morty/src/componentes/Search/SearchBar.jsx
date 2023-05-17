import style from './SearchBar.module.css';
import imageLogo from '../../image/logoNav.png';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
         setId('');
      }
   }

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.containerSearch}>
         <a href="https://github.com/DaniDell/Integration_R_M" target="_blank" rel="noopener noreferrer">
      <img
        src={imageLogo}
        alt="logo rick and morty"
        className={style.logo}
      />
    </a>
         
         <div className={style.containerInput}>
         <input 
            type='search' 
            placeholder="Write an id number..." 
            className={style.input}
            onKeyUp={handleEnter}
            onChange={handleChange}
            value = {id}
         />

<Link to="/home" >
         <button 
            onClick={()=> props.onSearch(id)}
            className={style.btnL}
         > <h1 className={style.look}>🔎</h1>
         </button>
         </Link>
         </div>

 </div>
   );
}
