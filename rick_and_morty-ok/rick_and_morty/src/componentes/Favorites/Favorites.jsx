import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, filterCards2, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const [filter1, setFilter1] = useState(""); // Estado del primer filtro
  const [filter2, setFilter2] = useState(""); // Estado del segundo filtro
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    resetFilters(); // Resetea los filtros antes de aplicar el nuevo filtro
    setFilter1(e.target.value); // Actualiza el estado del primer filtro
    dispatch(filterCards(e.target.value));
  };

  const handleFilter2 = (e) => {
    resetFilters(); // Resetea los filtros antes de aplicar el nuevo filtro
    setFilter2(e.target.value); // Actualiza el estado del segundo filtro
    dispatch(filterCards2(e.target.value));
  };

  const handleCardClose = () => {
        alert("Return to Home in order to dicard this card");
    
  };

  const resetFilters = () => {
    setFilter1(""); // Resetea el estado del primer filtro
    setFilter2(""); // Resetea el estado del segundo filtro 
  };

  return (
    <>
      <div className={style.Container}>
        <h1 className={style.title}>Filter by</h1>

        <div className={style.selectContainer}>
          <select className={style.title2} onChange={handleOrder}>
            <option value="">Id order</option>
            <option value="A">🔻</option>
            <option value="D">🔺</option>
          </select>

          <select className={style.title2} value={filter1} onChange={handleFilter}>
            <option value="">All gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>

          <select className={style.title2} value={filter2} onChange={handleFilter2}>
            <option value="">All species</option>
            <option value="Alien">Alien</option>
            <option value="Human">Human</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Robot">Robot</option>
          </select>
        </div>
      </div>

      <div className={style["card-container"]}>
        {myFavorites?.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              status={character.status}
              image={character.image}
              onClose={handleCardClose} // Pasamos la función handleCardClose como prop
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
