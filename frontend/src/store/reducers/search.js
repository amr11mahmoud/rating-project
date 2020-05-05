import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchQuery: "",
  searchSuggestions: [],
  fetchingSearchResults: false,
  searchResult: [],
  mainpage: true,
  navebar: false,
  typing: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_SEARCH_SUGGESTIONS:
      return Object.assign({}, state, {
        searchSuggestions: [],
      });

    // Cases for autoComplete actions
    case actionTypes.FETCHING_AUTOCOMPLETE_STARTED:
      return Object.assign({}, state, {
        typing: true,
      });
    case actionTypes.FETCHING_AUTOCOMPLETE_SUCCEED:
      return Object.assign({}, state, {
        typing: false,
        searchSuggestions: action.searchSuggestions,
        searchQuery: action.searchQuery,
      });
    case actionTypes.FETCHING_AUTOCOMPLETE_FAILED:
      return Object.assign({}, state, {
        typing: false,
        error: action.error,
      });

    // Cases for searchResult actions
    case actionTypes.FETCHING_RESULT_STARTED:
      return Object.assign({}, state, {
        fetchingSearchResults: true,
      });
    case actionTypes.FETCHING_RESULT_SUCCEED:
      return Object.assign({}, state, {
        fetchingSearchResults: false,
        searchResult: action.searchResult,
        searchQuery: action.searchQuery,
      });
    case actionTypes.FETCHING_RESULT_FAILED:
      return Object.assign({}, state, {
        fetchingSearchResults: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
