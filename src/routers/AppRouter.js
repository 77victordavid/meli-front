import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { BreadCrumb } from "../components/breadCrumb/BreadCrumb";
import { SearchBar } from "../components/searchBar/SearchBar";
import { DetailItem } from "../pages/detailItem/DetailItem";
import { Item } from "../pages/item/Item";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <BreadCrumb/>
      <Routes>
        <Route path="/items" element={<Item />} />
        <Route path="/items/:id" element={<DetailItem />} />
      </Routes>
    </BrowserRouter>
  );
};
