import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";
import { reducer as RegisterReducer } from "./Register/reducer";

const rootReducer= combineReducers({AppReducer, AuthReducer, RegisterReducer});

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store= legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { store };

//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_