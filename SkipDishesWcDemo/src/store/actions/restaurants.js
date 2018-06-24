import { AsyncStorage } from 'react-native'

import { SET_RESTAURANTS, SET_RESTAURANT, ADD_DISH_TO_CART } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetData } from './index';
import startOrderTabs from '../../screens/OrderTab/startOrderTabs';
import startRestaurantSelector from '../../screens/RestaurantTab/startRestaurantSelector';

export const getRestaurants = authData => {
    return dispatch => {
        let url = "https://vanhacking.getsandbox.com/restaurants";

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
                const restaurants = [];
                parsedRes.restaurants.forEach((item) => {
                    restaurants.push({
                        ...item,
                        key: item.id
                    });
                })
                dispatch(setRestaurants(restaurants));
            
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong! Please try again");  
        })
    }
}

export const selectRestaurant = (res) => {
    return dispatch => {
        dispatch(setRestaurant(res));
        startOrderTabs();
    }
}

export const setRestaurant = restaurant => {
    return {
        type: SET_RESTAURANT,
        restaurant: restaurant
    }
}

export const addDishToCart = (dish) => {
    alert("Dish successfuly added to cart!");
    return{
        type: ADD_DISH_TO_CART,
        dish: dish
    }
}

export const setRestaurants = restaurants => {
    return {
        type: SET_RESTAURANTS,
        restaurants: restaurants
    }
}

export const redirectToRestaurants = () => {
    return dispatch => {
        startRestaurantSelector();
    }
}

