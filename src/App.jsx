import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";

const productRaws = [
  {
    imageUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/5/3a8003ae-4e9a-465e-aec6-d9487cffb056.jpg",
    name: "The Psychology of Money",
    price: 50000,
    stock: 10,
  },
  {
    imageUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/8/16/791092f0-ad7e-4415-a378-383f487df944.png",
    name: "The Psychology of Emotion",
    price: 76000,
    stock: 12,
  },
];

const products = productRaws.map((product) => {
  return (
    <ProductCard
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.price}
      stock={product.stock}
    />
  );
});

function App() {
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

        <section className="grid max-w-screen-lg grid-cols-1 gap-4 mx-auto mb-32 sm:grid-cols-2 md:grid-cols-4">
          {products}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
