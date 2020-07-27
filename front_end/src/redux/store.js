import {createStore,applyMiddleware,compose } from "redux";
import rootReducer from "./reducer/admin";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
  );
export default store;