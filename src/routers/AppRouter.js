import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchBar } from "../components/searchBar/SearchBar";
import { Home } from "../pages/home/Home";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
