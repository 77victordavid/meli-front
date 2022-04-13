import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { BreadCrumb } from "../components/breadCrumb/BreadCrumb";
import { SearchBar } from "../components/searchBar/SearchBar";
import { DetailItem } from "../pages/detailItem/DetailItem";
import { Items } from "../pages/items/Items";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <BreadCrumb/>
      <Routes>
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<DetailItem />} />
        <Route path="*"  element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
};
