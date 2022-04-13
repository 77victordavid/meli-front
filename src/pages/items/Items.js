import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import "./Items.scss";
import { useNavigate } from "react-router-dom";
import { formatNumner } from "../../utils/utils";
import { EmptyData } from "../../components/emptyData/EmptyData";
export const Items = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((state) => state.products.products);
  useEffect(() => {
    if (!isEmpty(data)) {
      setItems(data.items);
    }
  }, [data]);

  const handleSelectItem = (item) => {
    navigate(`/items/${item.id}`);
  };
  return (
    <div className="container-fluid pb-3">
      <div className="row row-items ">
        {!isEmpty(items) && items?.map((item, index) => (
          <div
            className={classNames("col-8 offset-2 col-item", {
              "item-borders-radius-top": index === 0,
              "item-borders-radius-bottom": index === items.length - 1,
            })}
            key={item.id}
          >
            <div
              className={classNames("container-items", {
                "item-border-bottom": index !== items.length - 1,
              })}
            >
              <img
                className="img-product"
                src={item.picture}
                onClick={() => handleSelectItem(item)}
                alt={item.title}
              />
              <div
                className="item-description"
                onClick={() => handleSelectItem(item)}
              >
                <div className="item-description-price">
                  <p>${formatNumner(item.price.amount)}</p>
                  {item.free_shipping && (
                    <div className="item-description-icon-shipping"></div>
                  )}
                </div>
                <p>{item.title}</p>
              </div>
              <p className="item-description-city">{item.state_name}</p>
            </div>
          </div>
        ))}
        {isEmpty(items) && (
          <EmptyData/>
        )}
      </div>
    </div>
  );
};
