import {combineReducers} from 'redux'
import navbarOpen from './navbarOpen'
import queryHandler from './queryHandler'
import videoListCalculation from './videoListCalculation'

const allReducers = combineReducers({
    navbarOpen,
    queryHandler,
    videoListCalculation,
})

export default allReducers

