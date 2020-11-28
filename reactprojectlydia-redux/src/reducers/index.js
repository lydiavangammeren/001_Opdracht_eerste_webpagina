import counterReducer from './counter'
import loggedReducer from './isLogged'
// This is to combine multiple reducers:
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers