import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/indexPage";
import Layout from "./layouts/Layout";

const FavouritesPage = lazy(() => import('./views/favouritesPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favoritos" element={
                        <Suspense fallback='Cargando...'>
                            <FavouritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};