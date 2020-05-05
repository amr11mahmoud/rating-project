import * as actionType from "./actionTypes";

export const fetshingProductStarted = () => {
  return {
    type: actionType.FETCHING_PRODUCT_STARTED,
  };
};

export const fetshingProductSucceed = (product) => {
  return {
    type: actionType.FETCHING_PRODUCT_SUCCEED,
    product: product,
  };
};

export const fetshingProductFailed = (error) => {
  return {
    type: actionType.FETCHING_PRODUCT_FAILED,
    error: error,
  };
};

export const fetshProduct = (productTitle) => {
  return (dispatch) => {
    dispatch(fetshingProductStarted());
    fetch(`http://localhost:8000/api/product/${productTitle}`)
      .then((res) => res.json())
      .then((data) => {
        const product = data;
        dispatch(fetshingProductSucceed(product));
      })
      .catch((error) => {
        dispatch(fetshingProductFailed(error));
      });
  };
};
