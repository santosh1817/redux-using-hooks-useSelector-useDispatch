import { combineReducers } from 'redux';
import countReducer from './count/countReducer'
const rootReducer = combineReducers({
  count: countReducer,
  
});

export default rootReducer;
