import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from "../reducers/index";


const middleware = [createLogger(), thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
