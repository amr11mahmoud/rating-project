import * as actionTypes from "../actions/actionTypes";
const initialState = {
  productsArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RESUALT:
      return Object.assign({}, state, {
        productsArray: action.products,
      });

    default:
      return state;
  }
};

export default reducer;
