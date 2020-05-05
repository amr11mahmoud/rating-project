import * as actionTypes from "./actionTypes";

// AUTOCOMPLETE SCETION
export const autoCompleteStarted = () => {
  return {
    type: actionTypes.FETCHING_AUTOCOMPLETE_STARTED,
  };
};

export const autoCompleteSucceed = (searchSuggestions, searchQuery) => {
  return {
    type: actionTypes.FETCHING_AUTOCOMPLETE_SUCCEED,
    searchSuggestions: searchSuggestions,
    searchQuery: searchQuery,
  };
};

export const autoCompleteFailed = (error) => {
  return {
    type: actionTypes.FETCHING_AUTOCOMPLETE_FAILED,
    error: error,
  };
};

export const autoComplete = (searchQuery) => {
  return (dispatch) => {
    dispatch(autoCompleteStarted());
    fetch("http://localhost:8000/api/autocomplete/" + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        const searchSuggestions = data;
        dispatch(autoCompleteSucceed(searchSuggestions, searchQuery));
      })
      .catch((error) => {
        dispatch(autoCompleteFailed(error));
      });
  };
};
// END OF AUTOCOMPLETE SCETION

// RESULT SEGGESTION SCETION
export const searchResultStarted = () => {
  return {
    type: actionTypes.FETCHING_RESULT_STARTED,
  };
};

export const searchResultSucceed = (searchResult, searchQuery) => {
  return {
    type: actionTypes.FETCHING_RESULT_SUCCEED,
    searchResult: searchResult,
    searchQuery: searchQuery,
  };
};

export const searchResultFailed = (error) => {
  return {
    type: actionTypes.FETCHING_RESULT_FAILED,
    error: error,
  };
};

export const searchResult = (searchQuery) => {
  return (dispatch) => {
    dispatch(searchResultStarted());
    fetch("http://localhost:8000/api/search/" + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        const searchResult = data;
        dispatch(searchResultSucceed(searchResult, searchQuery));
      })
      .catch((error) => {
        dispatch(searchResultFailed(error));
      });
  };
};
// END OF SEARCH RESULT SCETION

export const resetSearchSuggetion = () => {
  return {
    type: actionTypes.RESET_SEARCH_SUGGESTIONS,
  };
};
