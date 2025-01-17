import { CartItem } from "@/components/CartItem";
import { AuthPage } from "@/components/guard/AuthPage";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartSelector = useSelector((state) => state.cart);

  return (
    <AuthPage>
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-24">
        <h1 className="text-3xl font-bold">My Cart</h1>

        <div className="mt-6">
          <Separator />

          <div className="grid grid-cols-12 gap-8 my-8">
            <div className="flex flex-col col-span-7 gap-6">
              {cartSelector.items.length ? (
                cartSelector.items.map((cartItem) => (
                  <CartItem
                    name={cartItem.product.name}
                    price={cartItem.product.price}
                    imageUrl={cartItem.product.imageUrl}
                    stock={cartItem.product.stock}
                    quantity={cartItem.quantity}
                  />
                ))
              ) : (
                <p>No product items added yet.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </AuthPage>
  );
};

export default CartPage;
