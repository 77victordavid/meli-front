import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SearchBar } from "../components/searchBar/SearchBar";
import { Home } from "../pages/home/Home";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <Routes>
        <Route path="/items" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
