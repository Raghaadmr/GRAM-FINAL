import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
import { checkForExpiredToken, fetchProducts, fetchCountries, setCart } from "./actions";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForExpiredToken());
store.dispatch(fetchProducts());
store.dispatch(fetchCountries());
store.dispatch(setCart());

export default store;
