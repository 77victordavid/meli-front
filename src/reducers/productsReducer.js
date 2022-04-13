import { types } from "../types/types";

const stateInitial = {
  products: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false
  },
  item: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false
  }
};
export const productsReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.getProductsStart:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
          isSuccess: false,
          isError: false
        }
      };
    case types.getProductsSuccess:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: action.payload.result
        }
      };
    case types.getProductsFail:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          isSuccess: false,
          isError: true,
          data: null
        }
      };
    case types.getDetailItemStart:
      return {
        ...state,
        item: {
          ...state.item,
          isLoading: true,
          isSuccess: false,
          isError: false
        }
      };
    case types.getDetailItemSuccess:
      return {
        ...state,
        item: {
          ...state.item,
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: action.payload.result
        }
      };
    case types.getDetailItemFail:
      console.log('#######: ', action)
      return {
        ...state,
        item: {
          ...state.item,
          isLoading: false,
          isSuccess: false,
          isError: true,
          data: action.payload.data
        }
      };
    default:
      return stateInitial
  }
};
