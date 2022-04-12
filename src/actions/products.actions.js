import {types} from './../types/types'

export const getProductsStar = () => ({
  type: types.getProductsStart
});
export const getProductsSuccess = (data) => ({
  type: types.getProductsSuccess,
  payload: data
});
export const getProductsFail = (error) => ({
  type: types.getProductsFail,
  payload: error
});

export const getDetailItemStar = () => ({
  type: types.getDetailItemStart
});
export const getDetailItemSuccess = (data) => ({
  type: types.getDetailItemSuccess,
  payload: data
});
export const getDetailItemFail = (error) => ({
  type: types.getDetailItemFail,
  payload: error
});
