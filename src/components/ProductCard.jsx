export const ProductCard = (props) => {
  const { imageUrl, name, price, stock } = props;

  return (
    <div className="flex flex-col p-4 border rounded-md gap-y-4 md:max-w-96">
      <div className="w-full overflow-hidden aspect-square">
        <img src={imageUrl} alt={name} className="object-cover" />
      </div>

      <div>
        <h2 className="text-lg">{name}</h2>
        <strong className="text-xl">Rp{price.toLocaleString("id-ID")}</strong>
        <p className="text-sm text-muted-foreground">In stock: {stock}</p>
      </div>
    </div>
  );
};
