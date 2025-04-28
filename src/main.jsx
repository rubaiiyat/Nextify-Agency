import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}></Route>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/services" element={<div>Services</div>}></Route>
        <Route path="/blogs" element={<div>Blogs</div>}></Route>
        <Route path="/categories" element={<div>Categories</div>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
