import { SET_RESTAURANTS, SET_RESTAURANT, ADD_DISH_TO_CART } from '../actions/actionTypes';

const initialState = {
    restaurants: [],
    currentRestaurant: null,
    selectedDishes: [],
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESTAURANTS:
              return{
                  ...state,
                  restaurants: action.restaurants
              }
        case SET_RESTAURANT:
              return{
                  ...state,
                  currentRestaurant: action.restaurant,
                  selectedDishes: [],
              }
        case ADD_DISH_TO_CART:
              return{
                  ...state,
                  selectedDishes: state.selectedDishes.concat(action.dish)
              }
        default:
         return state;
    }
};

export default reducer;