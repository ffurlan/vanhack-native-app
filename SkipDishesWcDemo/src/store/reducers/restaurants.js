import { SET_RESTAURANTS } from '../actions/actionTypes';

const initialState = {
    restaurants: []
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESTAURANTS:
              return{
                  ...state,
                  restaurants: action.restaurants
              }
        default:
         return state;
    }
};

export default reducer;