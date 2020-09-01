import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./../Reducers/index";

const store = createStore(allReducer, applyMiddleware(thunk));

export { store };
