import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ScreenSetReducer, HttpExeReducer, cameraReducer, dbReducer } from './reducers/ScreenSetReducer'

const RootReducer = combineReducers( 
    {   screens: ScreenSetReducer,
        httpStatus: HttpExeReducer,
        camera: cameraReducer,
        dbState: dbReducer
    } )

export default createStore( RootReducer, applyMiddleware(thunk) )