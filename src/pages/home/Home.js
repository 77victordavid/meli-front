import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import "./Home.scss";
export const Home = () => {
  const [items, setItems] = useState([]);

  const { data, isLoading } = useSelector((state) => state.products.products);
  useEffect(() => {
    console.log(data);
    if (!isEmpty(data)) {
      setItems(data.items);
    }
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="row row-items">
        {items?.map((item) => (
          <div className="col-8 offset-2 container-items">
            <img
              className="img-product"
              src={item.picture}
            />
            <div className="item-description">
              <div className="item-description-price">
                <p>${item.price.amount}</p>
                <div className="item-description-icon-shipping"></div>
              </div>
              <p>
                {item.title}
              </p>
            </div>
            <p className="item-description-city">Capital federal</p>
          </div>
        ))}
      </div>

      {/* <div className="container-items d-flex">
        
      </div> */}
    </div>
  );
};
