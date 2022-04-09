import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import { MeliApp } from "./MeliApp";
import 'bootstrap/dist/css/bootstrap.css';


 const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<MeliApp />)
