import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { createContext, useContext, useEffect, useState } from "react";
import Login from "./pages/Login/Login";

export const ThemeContext = createContext();
export const LoginContext = createContext();

function ProtectedRoute({ children }) {
  const { userLoggedIn } = useContext(LoginContext);
  if (!userLoggedIn) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}

function App() {
  const [theme, setTheme] = useState("light");
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("userLoggedIn")) || false;
  });

  useEffect(() => {
    localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
  }, [userLoggedIn]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoginContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="tracking"
              element={
                <ProtectedRoute>
                  <TrackingPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </LoginContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
