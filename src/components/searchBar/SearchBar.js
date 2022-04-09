import React from "react";
import "./SearchBar.scss";
export const SearchBar = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="container-bar">
          <span
            className="icon-meli"
            role="img"
            aria-label="Mercado Libre"
          ></span>

          <input type="search" placeholder="Nunca dejes de buscar" />
          <button type="submit" name="search">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};
