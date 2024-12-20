import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  const productsList = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        stock={product.stock}
      />
    );
  });

  const getProducts = async () => {
    setIsProductsLoading(true);
    try {
      const response = await axiosInstance.get("/products");

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsProductsLoading(false);
    }
  };

  // Fetch products when the component is mounted
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="px-8">
        <section className="flex items-center justify-center min-h-[90vh] h-full flex-col gap-y-2">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-6xl">
            Become a trend-setter with us
          </h1>

          <p className="text-lg text-center max-w-prose">
            FYStore provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </section>

        <section className="max-w-screen-lg mx-auto mb-32">
          {isProductsLoading ? (
            <p>Loading...</p>
          ) : (
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productsList}
            </section>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
