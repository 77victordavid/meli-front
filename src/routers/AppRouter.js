import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SearchBar } from "../components/searchBar/SearchBar";
import { DetailItem } from "../pages/detailItem/DetailItem";
import { Item } from "../pages/item/Item";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/items" element={<Item />} />
        <Route path="/items/:id" element={<DetailItem />} />
      </Routes>
    </BrowserRouter>
  );
};
