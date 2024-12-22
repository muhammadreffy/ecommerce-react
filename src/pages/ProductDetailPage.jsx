import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

const product = {
  id: 1,
  imageUrl:
    "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/5/3a8003ae-4e9a-465e-aec6-d9487cffb056.jpg",
  name: "The Psychology of Money",
  price: 50000,
  stock: 3,
};

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Header />
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto my-8">
        <div className="grid grid-cols-2 gap-8">
          <img src={product.imageUrl} alt={product.name} className="w-full" />

          <div className="flex flex-col justify-center gap-y-1">
            <h1 className="text-xl">{product.name}</h1>
            <h2 className="text-3xl font-bold">
              Rp {product.price.toLocaleString("id-ID")}
            </h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fuga
              soluta repudiandae dicta ab, voluptate harum quae quibusdam
              assumenda natus quisquam reiciendis fugiat eos beatae aspernatur
              quia earum aliquam rem.
            </p>

            <div className="flex items-center mt-6 gap-x-8">
              <Button size="icon" variant="ghost">
                <IoIosRemove className="w-6 h-6" />
              </Button>

              <span className="text-lg font-bold">{quantity}</span>

              <Button size="icon" variant="ghost">
                <IoIosAdd className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Button size="lg" className="w-full">
                Add to cart
              </Button>
              <Button size="icon" variant="ghost">
                <IoHeartOutline className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
