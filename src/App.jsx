import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Charts from "./pages/charts";
import About from "./pages/about";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="charts" element={<Charts />} />
          <Route path="about" element={<About />} />
          <Route
            path="auth"
            element={
              <ProtectedRoutes>
                <Auth />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
