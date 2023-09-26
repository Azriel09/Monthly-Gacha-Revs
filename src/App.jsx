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
import Cookies from "universal-cookie";

import "./global-styling.scss";
import SwitchTheme from "./components/switch/switch-theme";
import ThemeObject from "./global-styling";
import { MonthProvider } from "./context/month-context";
const queryClient = new QueryClient();

function App() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const [mode, setMode] = useState(true);
  const themes = ThemeObject();
  const darkmode = themes.darkmode;
  const lightmode = themes.lightmode;
  const SetTheme = (mode) => {
    if (mode) {
      return darkmode.home;
    } else {
      return lightmode.home;
    }
  };

  return (
    <div style={SetTheme(mode)}>
      <QueryClientProvider client={queryClient}>
        <SwitchTheme theme={setMode} />
        <MonthProvider>
          <Routes>
            <Route path="/" element={<NavBar mode={mode} />}>
              <Route index element={<Home theme={themes} mode={mode} />} />
              <Route path="charts" element={<Charts />} />
              <Route path="about" element={<About />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoutes>
                    <Admin theme={themes} mode={mode} />
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
        </MonthProvider>
        {token ? (
          <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
        ) : null}
      </QueryClientProvider>
    </div>
  );
}

export default App;
