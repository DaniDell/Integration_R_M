import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacter: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                myFavorites: [...state.allCharacter, action.payload],
                allCharacter: [...state.allCharacter, action.payload]
             };

        case FILTER:
            let copyFilter = state.allCharacter.filter( character => character.gender === action.payload );

            return { ...state, myFavorites: copyFilter};

            
        case ORDER:
            let orderCharacter = [...state.allCharacter];

            orderCharacter.sort((a, b) => {
                if (action.payload === "A") {
                    if (a.id < b.id) return -1;
                    if (b.id < a.id) return 1;
                    return 0;
                } else {
                    if (a.id < b.id) return 1;
                    if (b.id < a.id) return -1;
                    return 0;
                }
            });

            console.log("caso order", orderCharacter);
            return {...state, myFavorites: [...orderCharacter]};

        case REMOVE_FAV:
            let deleteCharacter = state.myFavorites.filter(
                character => character.id !== Number(action.payload)
            );
            return { ...state, myFavorites: deleteCharacter};

        default:
            return state;
    }
};

export default reducer;
