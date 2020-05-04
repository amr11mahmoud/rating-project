import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchQuery: "",
  searchSuggestions: [],
  mainpage: true,
  navebar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SUGGESTIONS:
      return Object.assign({}, state, {
        searchSuggestions: action.searchSuggestions,
        searchQuery: action.searchQuery,
      });
    case actionTypes.RESET_SEARCH_SUGGESTIONS:
      return Object.assign({}, state, {
        searchSuggestions: [],
      });
    default:
      return state;
  }
};

export default reducer;
