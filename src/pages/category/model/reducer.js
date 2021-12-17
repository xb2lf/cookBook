import { GETDATA, SELECTDTAB, CATETYPE, CATEASIDE } from "./actionTypes";
import { Map } from 'immutable';

const defaultState = Map({
  obj: {},
  routerInfo: {
    selectedTab: 'cookbook',
    cateType: 'category',
    cateAside: '',
  },
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETDATA:
      return state.set('obj', action.obj);
    case SELECTDTAB:
      return state.setIn(['routerInfo', 'selectedTab'], action.selectedTab);
    case CATETYPE:
      return state.setIn(['routerInfo', 'cateType'], action.cateType);
    case CATEASIDE:
      return state.setIn(['routerInfo', 'cateAside'], action.cateAside);
    default:
      return state;
  }
};

export default reducer