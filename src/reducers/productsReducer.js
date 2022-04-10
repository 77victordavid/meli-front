import { types } from "../types/types";

const stateInitial = {
  products: {
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
    default:
      return stateInitial
  }
};
