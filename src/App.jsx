import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import LoginPage from "./pages/auth/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import EditProductPage from "./pages/admin/EditProductPage";
import CounterPage from "./pages/CounterPage";

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/admin") ? <Header /> : null}

      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/cart" Component={CartPage} />

        <Route path="/login" Component={LoginPage} />

        <Route path="/counter" Component={CounterPage} />

        <Route path="/products/:productId" Component={ProductDetailPage} />

        <Route path="/admin">
          <Route path="products" Component={ProductManagementPage} />
          <Route path="products/create" Component={CreateProductPage} />
          <Route path="products/edit/:productId" Component={EditProductPage} />
        </Route>

        <Route path="*" Component={NotFoundPage} />
      </Routes>

      {!location.pathname.startsWith("/admin") ? <Footer /> : null}
    </>
  );
}

export default App;
