import { combineReducers } from 'redux'
import films from '../reducers/films'

const rootReducer = combineReducers({
    films:films,
});

export default rootReducer;