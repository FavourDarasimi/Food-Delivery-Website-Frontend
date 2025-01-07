import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopMeal from "./components/TopMeal";
import Home from "./pages/Home";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import AccountAccess from "./components/AccountAccess";
import { useState } from "react";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="scroll-smooth  h-screen">
      {showLogin ? <AccountAccess setShowLogin={setShowLogin} /> : <></>}
      <div className="w-90% mx-auto min-h-screen">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/" element={<Menu />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/order/" element={<Order />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
