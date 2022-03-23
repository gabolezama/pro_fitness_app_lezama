import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ScreenSetReducer, HttpExeReducer, cameraReducer } from './reducers/ScreenSetReducer'

const RootReducer = combineReducers( 
    {   screens: ScreenSetReducer,
        httpStatus: HttpExeReducer,
        camera: cameraReducer
    } )

export default createStore( RootReducer, applyMiddleware(thunk) )