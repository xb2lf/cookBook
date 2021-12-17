import { CHANGESWITCH } from "./actionTypes";
import { Map } from 'immutable';

const defaultState = Map({
  //checked: localStorage.getItem('checked') === 'true' ? true : false
  checked: JSON.parse(localStorage.getItem('checked')),
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGESWITCH:
      return state.set('checked', action.checked)

    default:
      return state;
  }
};

export default reducer