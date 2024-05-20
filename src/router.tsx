import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/indexPage";
import FavouritesPage from "./views/favouritesPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/favoritos" element={<FavouritesPage />} />
            </Routes>
        </BrowserRouter>
    );
};