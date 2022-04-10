import { isEmpty } from "lodash";
import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import queryString from 'query-string';
import { useNavigate, useLocation } from "react-router-dom";
import { getProducts } from "../../api/services/Products.api";
import "./SearchBar.scss";
export const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const {q = ''} =  queryString.parse(location.search);
  console.log(q, location)
  const [search, setSearch] = useState(q);
  const handleSearch = (e) => {
    if(!isEmpty(search)) {
      navigate(`/items?q=${search}`);
      getProducts(search, dispatch)
    }
  }
  return (
    <header>
      <div className="container-fluid search-bar">
        <div className="row">
          <div className="col-8 offset-2 p-0 d-flex">
            <img
              className="icon-meli"
              aria-label="Mercado Libre"
              src={`${process.env.PUBLIC_URL}/assets/Logo_ML.png`}
              onClick={()=> navigate('/')}
            ></img>
            <input name="search" placeholder="Nunca dejes de buscar" value={search} onChange={(event) => setSearch(event.target.value) }/>
            <button type="submit" name="search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
