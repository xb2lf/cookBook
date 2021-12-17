import { CHANGESWITCH } from "./actionTypes";

const defaultState = {
  //checked: localStorage.getItem('checked') === 'true' ? true : false
  checked: JSON.parse(localStorage.getItem('checked')),
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGESWITCH:
      return {
        ...state,
        checked: action.checked
      };

    default:
      return state;
  }
};

export default reducer