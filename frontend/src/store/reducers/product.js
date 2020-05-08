import * as actionTypes from "../actions/actionTypes";
const initialState = {
  product: [],
  product_comments: [],
  fetchingProduct: false,
  fetchingComments: false,
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
    case actionTypes.FETCHING_COMMENTS_STARTED:
      return Object.assign({}, state, {
        fetchingComments: true,
      });
    case actionTypes.FETCHING_COMMENTS_SUCCEED:
      return Object.assign({}, state, {
        fetchingComments: false,
        product_comments: action.comments,
      });
    case actionTypes.FETCHING_COMMENTS_FAILED:
      return Object.assign({}, state, {
        fetchingComments: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
