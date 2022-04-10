import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import "./MeliApp.scss";
import { store } from "./store/Store";

export const MeliApp = () => {
  return (
    <Provider store={store}>
      <div className="container-meli">
        <AppRouter />
      </div>
    </Provider>
  );
};
