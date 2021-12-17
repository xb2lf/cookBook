import { LOADDATA } from "./actionTypes";
import { fromJS, List } from 'immutable';
const defaultState = fromJS({
  list: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADDATA:
      return state.set('list', List(action.list));

    default:
      return state;
  }
};

export default reducer