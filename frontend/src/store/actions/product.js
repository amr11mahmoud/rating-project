import * as actionType from "./actionTypes";

export const fetchingProductStarted = () => {
  return {
    type: actionType.FETCHING_PRODUCT_STARTED,
  };
};

export const fetchingProductSucceed = (product) => {
  return {
    type: actionType.FETCHING_PRODUCT_SUCCEED,
    product: product,
  };
};

export const fetchingProductFailed = (error) => {
  return {
    type: actionType.FETCHING_PRODUCT_FAILED,
    error: error,
  };
};

export const fetchProduct = (productTitle) => {
  return (dispatch) => {
    dispatch(fetchingProductStarted());
    fetch(`http://localhost:8000/api/product/${productTitle}`)
      .then((res) => res.json())
      .then((data) => {
        const product = data;
        dispatch(fetchingProductSucceed(product));
      })
      .catch((error) => {
        dispatch(fetchingProductFailed(error));
      });
  };
};

//  commetns functions
export const fetchingCommentsStarted = () => {
  return {
    type: actionType.FETCHING_COMMENTS_STARTED,
  };
};

export const fetchingCommentsSucceed = (comments) => {
  return {
    type: actionType.FETCHING_COMMENTS_SUCCEED,
    comments: comments,
  };
};

export const fetchingCommentsFailed = (error) => {
  return {
    type: actionType.FETCHING_COMMENTS_FAILED,
    error: error,
  };
};

export const fetchComments = (productTitle) => {
  return (dispatch) => {
    dispatch(fetchingProductStarted());
    fetch(`http://localhost:8000/api/comments/${productTitle}`)
      .then((res) => res.json())
      .then((data) => {
        const comments = data;
        dispatch(fetchingCommentsSucceed(comments));
      })
      .catch((error) => {
        dispatch(fetchingCommentsFailed(error));
      });
  };
};