import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { imageUrl, name, price, stock } = props;

  const addToCart = () => {
    alert("Added to cart");
  };

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // MOUNT
  // useEffect(() => {
  //   alert("Component mounted");
  // }, []);

  // UPDATE DIBARENGI DENGAN MOUNT
  // useEffect(() => {
  //   alert("Component updated");
  // }, [quantity]);

  // UNMOUNT
  // useEffect(() => {
  //   return () => {
  //     alert("Component unmounted");
  //   };
  // }, []);

  return (
    <div className="flex flex-col justify-between p-4 border rounded-md gap-y-4 md:max-w-96">
      <div>
        <Link
          to="/product/detail"
          className="w-full overflow-hidden aspect-square"
        >
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="object-cover"
          />
        </Link>

        <Link to="/product/detail" className="mt-2">
          <h2 className="text-lg">{name}</h2>
          <strong className="text-xl">Rp{price.toLocaleString("id-ID")}</strong>
          <p className="text-sm text-muted-foreground">In stock: {stock}</p>
        </Link>
      </div>

      <div className="flex flex-col gap-y-2">
        {/* BUTTON QTY */}
        <div className="flex items-center justify-between">
          <Button
            disabled={quantity === 0}
            size="icon"
            variant="ghost"
            onClick={decrementQuantity}
          >
            <IoIosRemove className="w-6 h-6" />
          </Button>

          <span className="text-lg font-bold">{quantity}</span>

          <Button
            disabled={quantity >= stock}
            size="icon"
            variant="ghost"
            onClick={incrementQuantity}
          >
            <IoIosAdd className="w-6 h-6" />
          </Button>
        </div>

        {/* BUTTON ADD TO CART */}
        <Button disabled={!stock} className="w-full" onClick={addToCart}>
          {stock ? "Add to cart" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};
