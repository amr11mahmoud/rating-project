import * as actionTypes from "../actions/actionTypes";
const initialState = {
  product: [],
  fetchingProduct: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_PRODUCT_STARTED:
      return Object.assign({}, state, {
        fetchingProduct: true,
      });
    case actionTypes.FETCHING_PRODUCT_SUCCEED:
      return Object.assign({}, state, {
        fetchingProduct: false,
        product: action.product,
      });
    case actionTypes.FETCHING_PRODUCT_FAILED:
      return Object.assign({}, state, {
        fetchingProduct: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
