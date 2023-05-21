import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  const handleCardClose = (cardId) => {
    // Aquí puedes mostrar la alerta "Para borrar la tarjeta, vuelve al home"
    alert("Return to Home in order to dicard this card");
    // Aquí puedes realizar cualquier otra acción relacionada con el cierre de la tarjeta
    // ...
  };

  return (
    <>
      <h1 className={style.title}>My Favorites</h1>

      <div className={style.selectContainer}>
        <select className={style.title} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select className={style.title} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={style["card-container"]}>
        {myFavorites?.map((character, index) => {
          return (
            <Card
            key={`${character.id}-${index}`}
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
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
