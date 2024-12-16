import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const ProductCard = (props) => {
  const { imageUrl, name, price, stock } = props;

  return (
    <div className="flex flex-col justify-between p-4 border rounded-md gap-y-4 md:max-w-96">
      <div>
        <div className="w-full overflow-hidden aspect-square">
          <img src={imageUrl} alt={name} className="object-cover" />
        </div>

        <div className="mt-2">
          <h2 className="text-lg">{name}</h2>
          <strong className="text-xl">Rp{price.toLocaleString("id-ID")}</strong>
          <p className="text-sm text-muted-foreground">In stock: {stock}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        {/* BUTTON QTY */}
        <div className="flex items-center justify-between">
          <Button size="icon" variant="ghost">
            <IoIosRemove className="w-6 h-6" />
          </Button>

          <span className="text-lg font-bold">0</span>

          <Button size="icon" variant="ghost">
            <IoIosAdd className="w-6 h-6" />
          </Button>
        </div>

        {/* BUTTON ADD TO CART */}
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  );
};
