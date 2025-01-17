import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Button } from "./ui/button";
import { IoCheckmark, IoClose, IoTrash } from "react-icons/io5";
import { axiosInstance } from "@/lib/axios";
import { useSelector } from "react-redux";
import { getCart } from "@/services/cartService";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const CartItem = (props) => {
  const { id, name, price, imageUrl, stock, quantity } = props;

  const userSelector = useSelector((state) => state.user);

  const [qty, setQty] = useState(quantity);

  const debounceUpdateCart = useDebouncedCallback(() => {
    updateCartQuantity();
  }, 2000);

  const removeCartItem = async () => {
    try {
      await axiosInstance.delete(`/carts/${id}`);

      alert("Successfully remove cart item");

      getCart(userSelector.id);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartQuantity = async () => {
    try {
      await axiosInstance.patch(`/carts/${id}`, {
        quantity: qty,
      });

      getCart(userSelector.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    debounceUpdateCart();
  }, [qty]);

  return (
    <div className="flex gap-4">
      <div className="w-full overflow-hidden rounded-md aspect-square max-w-52">
        <img src={imageUrl} alt={name} className="w-full" />
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="font-bold">Rp{price.toLocaleString("id-ID")}</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            disabled={qty === 1}
            variant="ghost"
            size="icon"
            onClick={() => setQty(qty - 1)}
          >
            <IoIosRemove className="w-4 h-4" />
          </Button>

          <p className="text-lg font-bold">{qty}</p>

          <Button
            disabled={qty >= stock}
            variant="ghost"
            size="icon"
            onClick={() => setQty(qty + 1)}
          >
            <IoIosAdd className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            {stock < quantity ? (
              <>
                <IoClose className="w-6 h-6 text-red-600" />
                <span className="text-muted-foreground">Not Available</span>
              </>
            ) : (
              <>
                <IoCheckmark className="w-6 h-6 text-green-500" />
                <span className="text-muted-foreground">Available</span>
              </>
            )}
          </div>

          <Button variant="ghost" onClick={removeCartItem}>
            <IoTrash className="w-6 h-6 text-destructive" />
            <span className="text-destructive">Remove Item</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
