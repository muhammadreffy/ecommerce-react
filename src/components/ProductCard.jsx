export const ProductCard = () => {
  return (
    <div className="flex flex-col p-4 border rounded-md gap-y-4 md:max-w-96">
      <div className="w-full overflow-hidden aspect-square">
        <img
          src="https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/5/3a8003ae-4e9a-465e-aec6-d9487cffb056.jpg"
          alt="product"
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="text-lg">The Psychology of Money</h2>
        <strong className="text-xl">Rp72.250</strong>
        <p className="text-sm text-muted-foreground">In stock: 10</p>
      </div>
    </div>
  );
};
