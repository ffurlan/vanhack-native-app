import { AsyncStorage } from 'react-native'

import { SET_RESTAURANTS } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetData } from './index';
import startOrderTabs from '../../screens/OrderTab/startOrderTabs';

export const getRestaurants = () => {
    return (dispatch, getState) => {
        const restaurants = [];
        restaurants.push(
        {
            display_name: "Restaurant1",
            key: "R1"
        });
        restaurants.push(
        {
            display_name: "Restaurant2",
            key: "R2"
        });
        restaurants.push(
        {
            display_name: "Restaurant3",
            key: "R3"
        });
        
        dispatch(setRestaurants(restaurants))
    }
}

export const selectRestaurant = (res) => {
    return dispatch => {
        //dispatch(setCompany(res));
        startOrderTabs();
    }
}

export const setRestaurants = restaurants => {
    return {
        type: SET_RESTAURANTS,
        restaurants: restaurants
    }
}
