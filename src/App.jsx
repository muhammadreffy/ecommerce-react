import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/cart" Component={CartPage} />

        <Route path="/login" Component={LoginPage} />

        <Route path="/product/detail" Component={ProductDetailPage} />

        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
