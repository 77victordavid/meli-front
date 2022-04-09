import React from "react";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="container home">
      <div className="container-items d-flex">
        {/* <div className='row'>
          <div className='col-2'>
            <img src='https://http2.mlstatic.com/D_NQ_NP_691353-MCO49533588258_032022-W.webp'/>
          </div>
          <div className='col-8'>
            <h3>$1.980</h3>
            <p>Apple ipod toour 5g 16gb negro igual a nuevo completo unico!</p>
          </div>
          <div className='col-2'>
            <p>Capital federal</p>
          </div>
        </div> */}
        <img
          className="img-product"
          src="https://http2.mlstatic.com/D_NQ_NP_691353-MCO49533588258_032022-W.webp"
        />
        <div className="item-description">
          <div className="item-description-price">
            <h4>$1.980</h4>
            <div className="item-description-icon-shipping"></div>
          </div>
          <p>Apple ipod toour 5g 16gb negro igual a nuevo completo unico!</p>
        </div>
        <p className="item-description-city">Capital federal</p>
      </div>
    </div>
  );
};
