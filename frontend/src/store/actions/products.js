import * as actionType from "./actionTypes";

export const setSearchResualt = (data) => {
  return {
    type: actionType.SEARCH_RESUALT,
    products: data,
  };
};
