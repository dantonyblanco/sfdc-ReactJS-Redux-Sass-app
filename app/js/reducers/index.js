import { combineReducers } from 'redux';
import TextReducer from './reducer_texts';

const rootReducer = combineReducers({
  texts: TextReducer
});

export default rootReducer;