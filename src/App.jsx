import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/cart" Component={CartPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
