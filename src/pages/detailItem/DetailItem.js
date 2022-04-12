import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailItem } from "../../api/services/Products.api";
import { formatNumner } from "../../utils/utils";
import "./DetailItem.scss";
export const DetailItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useSelector((state) => state.products.item);
  const { item = {} } = data;
  const textCondition = item.condition === "new" ? "Nuevo" : "Usado";
  useEffect(() => {
    if (!isEmpty(id)) {
      console.log("entro: ", id);
      getDetailItem(id, dispatch);
    }
  }, [dispatch, id]);
  return (
    <div className="container-fluid">
      <div className="row item-detail">
        {isLoading && <h1>Cargando</h1>}
        {!isLoading && (
          <>
            <div className="col-8 offset-2 bg-white container-detail">
              <div className="row">
                <div className="col-6">
                  <img src={item.picture} alt={item.title} />
                </div>
                <div className="col-4 offset-2 mt-4">
                  <div className="item-title">
                    <div className="item-title-body">
                      <p className="item-title-body__condition">{`${textCondition} - ${item.sold_quantity} vendidos`}</p>
                      <p className="item-title-body__title">{item.title}</p>
                      <p className="item-title-body__price">
                        ${formatNumner(item.price?.amount)}
                      </p>
                      <button className="btn btn-primary item-title-body__button">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="item-description">
                    <h3>Descripcion del producto</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
