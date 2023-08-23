import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Charts from "./pages/charts";
import About from "./pages/about";
import Login from "./pages/login";
import ProtectedRoutes from "./ProtectedRoutes";
import Auth from "./Auth";
import Admin from "./pages/admin";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="charts" element={<Charts />} />
          <Route path="about" element={<About />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />
          <Route
            path="auth"
            element={
              <ProtectedRoutes>
                <Auth />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
