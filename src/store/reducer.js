import { combineReducers } from 'redux-immutable';
import { default as home } from '../pages/home/model/reducer';
import { default as cookbook } from '../pages/cookBook/model/reducer';
import { default as category } from '../pages/category/model/reducer';
const reducer = combineReducers({
  home,
  cookbook,
  category,
});

export default reducer;