import rootReducer from "./Reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

// Create the Redux store with rootReducer, middleware, and DevTools support
export const store = createStore(
    rootReducer, //Redux reducer
    composeWithDevTools(applyMiddleware(thunk)) // Enhance with Redux DevTools and middleware
);