import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({
    id: 0,
    imageUrl: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const [productIsLoading, setProductIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${params.productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setProductIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto my-8">
        <div className="grid grid-cols-2 gap-8">
          {productIsLoading ? (
            <Skeleton className="w-full h-[582px]" />
          ) : (
            <img src={product.imageUrl} alt={product.name} className="w-full" />
          )}

          <div className="flex flex-col justify-center gap-y-1">
            {productIsLoading ? (
              <Skeleton className="w-[250px] h-[32px]" />
            ) : (
              <h1 className="text-xl">{product.name}</h1>
            )}

            {productIsLoading ? (
              <Skeleton className="w-[200px] h-[48px]" />
            ) : (
              <h2 className="text-3xl font-bold">
                Rp {product.price.toLocaleString("id-ID")}
              </h2>
            )}

            {productIsLoading ? (
              <Skeleton className="w-[350px] h-[120px] mt-4" />
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                fuga soluta repudiandae dicta ab, voluptate harum quae quibusdam
                assumenda natus quisquam reiciendis fugiat eos beatae aspernatur
                quia earum aliquam rem.
              </p>
            )}

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
