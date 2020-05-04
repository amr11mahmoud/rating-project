import * as actionTypes from "./actionTypes";

export const saveSearchSuggestions = (data, value) => {
  return {
    type: actionTypes.SEARCH_SUGGESTIONS,
    searchSuggestions: data,
    searchQuery: value,
  };
};

export const resetSearchSuggetion = () => {
  return {
    type: actionTypes.RESET_SEARCH_SUGGESTIONS,
  };
};
