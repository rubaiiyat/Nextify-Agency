import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Pricing from "./Pages/Home/Pricing.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Services from "./Pages/Home/Services.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/package" element={<Pricing />}></Route>
          <Route path="/categories" element={<div>Categories</div>}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
