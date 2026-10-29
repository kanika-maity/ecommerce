
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/Mens"
          element={<ShopCategory category="Mens" />}
        />

        <Route
          path="/Womens"
          element={<ShopCategory category="Womens" />}
        />

        <Route
          path="/Kids"
          element={<ShopCategory category="Kids" />}
        />

        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
