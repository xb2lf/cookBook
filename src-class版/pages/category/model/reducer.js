import { GETDATA, SELECTDTAB, CATETYPE, CATEASIDE } from "./actionTypes";

const defaultState = {
  obj: {},
  routerInfo: {
    selectedTab: 'cookbook',
    cateType: 'category',
    cateAside: '',
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETDATA:
      return {
        ...state,
        obj: action.obj
      };
    case SELECTDTAB:
      return {
        ...state,
        routerInfo: {
          ...state.routerInfo,
          selectedTab: action.selectedTab
        }
      };
    case CATETYPE:
      return {
        ...state,
        routerInfo: {
          ...state.routerInfo,
          cateType: action.cateType
        }
      };
    case CATEASIDE:
      return {
        ...state,
        routerInfo: {
          ...state.routerInfo,
          cateAside: action.cateAside
        }
      };

    default:
      return state;
  }
};

export default reducer