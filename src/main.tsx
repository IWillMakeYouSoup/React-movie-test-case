import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/theme.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details.tsx";
import List from "./pages/list/List.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App>
            <BrowserRouter>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="*" element={<List />} />
                </Routes>
            </BrowserRouter>
        </App>
    </React.StrictMode>
);
