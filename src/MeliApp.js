import React from "react";
import { AppRouter } from "./routers/AppRouter";
import './MeliApp.scss';

export const MeliApp = () => {
  return (
    <div className="container-meli">
      <AppRouter />
    </div>
  );
};
