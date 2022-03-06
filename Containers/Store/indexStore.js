import { createStore, combineReducers } from "redux";
import ScreenSetReducer from './reducers/ScreenSetReducer'

const RootReducer = combineReducers( { screens: ScreenSetReducer} )

export default createStore( RootReducer )