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
   
