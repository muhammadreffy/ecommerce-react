import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/cart" Component={CartPage} />

        <Route path="/login" Component={LoginPage} />

        <Route path="*" Component={NotFoundPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
