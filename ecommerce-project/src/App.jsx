import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="tracking" element={<TrackingPage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
