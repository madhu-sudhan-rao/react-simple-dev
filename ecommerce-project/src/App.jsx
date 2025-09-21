import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<OrdersPage />} />
      </Routes>
    
    </>
  );
}

export default App;
