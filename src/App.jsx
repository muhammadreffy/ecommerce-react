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
import RegisterPage from "./pages/auth/RegisterPage";
import { useHydration } from "./hooks/useHydration";

function App() {
  const location = useLocation();

  const { isHydrated } = useHydration();

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <>
      {!location.pathname.startsWith("/admin") &&
      !location.pathname.startsWith("/login") &&
      !location.pathname.startsWith("/register") ? (
        <Header />
      ) : null}

      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/cart" Component={CartPage} />

        <Route path="/register" Component={RegisterPage} />
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

      {!location.pathname.startsWith("/admin") &&
      !location.pathname.startsWith("/login") &&
      !location.pathname.startsWith("/register") ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
