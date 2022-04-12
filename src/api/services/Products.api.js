import { getDetailItemFail, getDetailItemStar, getDetailItemSuccess, getProductsFail, getProductsStar, getProductsSuccess } from "../../actions/products.actions";
import { simpleFetch } from "../../utils/fetch"
export const getProducts = async (query, dispatch) => {
  dispatch(getProductsStar());
  try {
    const api = `/items?q=${query}`
    const result = await simpleFetch(api);
    console.log(result)
    dispatch(getProductsSuccess(result));
  } catch (error) {
    dispatch(getProductsFail(error));
  }
}

export const getDetailItem = async (id, dispatch) => {
  dispatch(getDetailItemStar());
  try {
    const api = `/items/${id}`
    const result = await simpleFetch(api);
    console.log(result)
    dispatch(getDetailItemSuccess(result));
  } catch (error) {
    dispatch(getDetailItemFail(error));
  }
}