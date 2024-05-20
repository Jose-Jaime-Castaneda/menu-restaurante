import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/indexPage";
import FavouritesPage from "./views/favouritesPage";
import Layout from "./layouts/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/favoritos" element={<FavouritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};