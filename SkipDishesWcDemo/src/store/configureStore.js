import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import restaurantsReducer from './reducers/restaurants';

const rootReduer = combineReducers({
    auth: authReducer,
    restaurants: restaurantsReducer
});

let composeEnhancers = compose;

const configureStore = () => {
    return createStore(rootReduer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;

