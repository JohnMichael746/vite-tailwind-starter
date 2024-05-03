import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { AppContextProvider } from "./providers/AppContext";
import LandingPageLayout from "./layouts/LandingPageLayout";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
