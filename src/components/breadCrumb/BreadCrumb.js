import React from "react";
import { useSelector } from "react-redux";
import "./BreadCrumb.scss";
export const BreadCrumb = () => {
  const { categories } = useSelector((state) => state.products.products.data);
  const validCategories =
    categories?.length > 5 ? categories.slice(0, 5) : categories || [];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 offset-2 pl-0 container-breadcrumb">
          <ul className="breadcrumb">
            {validCategories.map((categorie) => (
              <li key={categorie}>{categorie}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
