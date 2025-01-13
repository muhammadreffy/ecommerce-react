import { CartItem } from "@/components/CartItem";
import { AuthPage } from "@/components/guard/AuthPage";
import { Separator } from "@/components/ui/separator";

const CartPage = () => {
  return (
    <AuthPage>
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-8">
        <h1 className="text-3xl font-bold">My Cart</h1>

        <div className="mt-10">
          <Separator />

          <div className="grid grid-cols-12 gap-8 my-8">
            <div className="flex flex-col col-span-7 gap-6">
              <CartItem
                name="The Psychology of Money"
                price={50000}
                imageUrl="https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/5/3a8003ae-4e9a-465e-aec6-d9487cffb056.jpg"
              />
            </div>
          </div>
        </div>
      </main>
    </AuthPage>
  );
};

export default CartPage;
