import { CartItem } from "@/components/CartItem";
import { AuthPage } from "@/components/guard/AuthPage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { axiosInstance } from "@/lib/axios";
import { getCart } from "@/services/cartService";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartSelector = useSelector((state) => state.cart);
  const userSelector = useSelector((state) => state.user);

  const subtotal = cartSelector.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity * currValue.product.price;
  }, 0);

  const taxes = subtotal * 0.11;

  const total = subtotal + taxes;

  const handleChekout = async () => {
    for (let i = 0; i < cartSelector.items.length; i++) {
      const currentCartItem = cartSelector.items[i];

      console.log(currentCartItem);

      if (currentCartItem.quantity > currentCartItem.product.stock) {
        alert("One of your items is unavailable, please remove it.");
      }
    }

    await axiosInstance.post("/transactions", {
      userId: userSelector.id,
      tax: taxes,
      totalPrice: total,
      items: cartSelector.items,
      dateTime: new Date().toLocaleString(),
    });

    cartSelector.items.forEach(async (cartItem) => {
      await axiosInstance.patch(`/products/${cartItem.productId}`, {
        stock: cartItem.product.stock - cartItem.quantity,
      });
    });

    cartSelector.items.forEach(async (cartItem) => {
      await axiosInstance.delete(`/carts/${cartItem.id}`);
    });

    alert("Checkout Successfully");

    getCart(userSelector.id);
  };

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
                    key={cartItem.id}
                    id={cartItem.id}
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

            <Card className="col-span-5 bg-gray-50 h-min">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between pb-4 border-b">
                  <span className="text-sm text-muted-foreground">
                    Subtotal
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Rp{subtotal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between py-4">
                  <span className="text-sm text-muted-foreground">
                    Taxes (11%)
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Rp{taxes.toLocaleString("id-ID")}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-6">
                <div className="flex justify-between w-full">
                  <span className="text-muted-foreground">Order total</span>

                  <strong className="font-semibold">
                    Rp{total.toLocaleString("id-ID")}
                  </strong>
                </div>

                <Button className="w-full" onClick={handleChekout}>
                  Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </AuthPage>
  );
};

export default CartPage;
