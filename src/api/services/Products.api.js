import {
  getDetailItemFail,
  getDetailItemStar,
  getDetailItemSuccess,
  getProductsFail,
  getProductsStar,
  getProductsSuccess,
} from "../../actions/products.actions";
import { simpleFetch } from "../../utils/fetch";
export const getProducts = async (query, dispatch) => {
  dispatch(getProductsStar());
  const api = `/items?q=${query}`;
  const result = await simpleFetch(api);
  if (result.ok) {
    dispatch(getProductsSuccess(result));
  } else {
    dispatch(getProductsFail(result));
  }
};

export const getDetailItem = async (id, dispatch) => {
  dispatch(getDetailItemStar());
  const api = `/items/${id}`;
  const result = await simpleFetch(api);
  if (result.ok) {
    dispatch(getDetailItemSuccess(result));
  } else {
    dispatch(getDetailItemFail(result));
  }
};
