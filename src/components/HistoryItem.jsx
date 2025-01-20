import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const HistoryItem = (props) => {
  return (
    <div className="border rounded-md">
      <div className="flex items-center p-4 justify-between bg-slate-100">
        <div className="flex flex-col justify-center">
          <span className="text-sm text-muted-foreground">
            {new Date(props.dateTime).toLocaleString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
          <span className="font-semibold text-muted-foreground">
            INV-{props.id}-FYSTORE
          </span>
        </div>

        <div className="flex flex-col items-end justify-center">
          <span className="text-2xl font-bold">
            Rp{props.totalPrice.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <Table className="mt-2">
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2}>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Total Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {props.items.map((item) => (
            <TableRow
              key={item.id}
              className="font-semibold text-muted-foreground"
            >
              <TableCell colSpan={2}>
                <div className="flex items-center gap-6">
                  <div className="aspect-square w-[100px] overflow-hidden rounded-md">
                    <img src={item.product.imageUrl} alt={item.product.name} />
                  </div>
                  <p className="font-semibold text-primary">
                    {item.product.name}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                Rp{item.product.price.toLocaleString("id-ID")}
              </TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>Rp{props.tax.toLocaleString("id-ID")}</TableCell>
              <TableCell>
                Rp{props.totalPrice.toLocaleString("id-ID")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
