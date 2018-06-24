import { AUTH_SET_DATA, AUTH_REMOVE_DATA } from '../actions/actionTypes';

const initialState = {
    data:{
        token: null,
        email: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case AUTH_SET_DATA:
        return {
            ...state,
            data:{
                ...state.data,
                token: action.data.token,
                email: action.data.email
            }
        };
        case AUTH_REMOVE_DATA:{
            return {
                ...state,
                data:{
                    ...state.data,
                    token: null,
                    email: null,
                }
            }
        }
        default:
            return state;
    }
}

export default reducer;