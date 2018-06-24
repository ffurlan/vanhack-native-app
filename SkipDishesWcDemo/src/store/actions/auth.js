import { AsyncStorage } from 'react-native'

import { TRY_AUTH, AUTH_SET_DATA, AUTH_REMOVE_DATA } from './actionTypes';

import startRestaurantSelector from '../../screens/RestaurantTab/startRestaurantSelector';

import App from '../../../App';


export const tryAuth = authData => {
    return dispatch => {
        dispatch(authStoreData(authData));
        startRestaurantSelector();
    }
}

export const authStoreData = (data) => {
    return dispatch => {
        dispatch(authSetData(data));
        AsyncStorage.setItem("ap:auth:data", JSON.stringify(data));
    }
}

export const authSetData = data => {
    return {
        type: AUTH_SET_DATA,
        data: data
    }
};

export const authGetData = () => {
    return (dispatch, getState) => {
        const data = getState().auth.data;
        const promise = new Promise((resolve, reject) => {
            if (!data.token){
                AsyncStorage.getItem("ap:auth:data")
                    .catch(err => reject())
                    .then(dataFromStorage => {
                        if (!dataFromStorage){
                            reject();
                            return;
                        }
                        let formatedData = JSON.parse(dataFromStorage);
                        dispatch(authSetData(formatedData));
                        resolve(formatedData);
                    })
            } else{
                resolve(data);
            }
        });
        return promise.catch(err => {
            AsyncStorage.getItem("ap:auth:data")
            .catch(err => reject())
        })
        .then(newData => {
            if (!newData) {
              throw new Error();
            } else {
              return newData;
            }
          });
    }
}

export const authAutoSignIn = () => {
    return dispatch => {
        dispatch(authGetData())
        .then(data => {
            dispatch(authSetData(data));
            if (data.email){
                startRestaurantSelector();
            }
        })
        .catch(err => console.log("Failed to fetch token!"))

    }
}

export const authClearStorage = () => {
    return dispatch => {
        return AsyncStorage.removeItem("ap:auth:data");
    }
}

export const authLogout = () => {
    return dispatch => {
        dispatch(authClearStorage())
            .then(() => {
                App();
            });
        dispatch(authRemoveData());
        
    }
}

export const authRemoveData = () => {
    return {
        type: AUTH_REMOVE_DATA
    }
}

