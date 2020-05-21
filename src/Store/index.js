import { createStore, applyMiddleware, compose } from "redux";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import rootReducer from "../Redusers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

export default store;
