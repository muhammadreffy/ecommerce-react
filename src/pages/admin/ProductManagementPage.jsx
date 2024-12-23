import { AdminLayout } from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _limit: 5,
        },
      });

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <AdminLayout
        title="Product Management Page"
        description="Manage our store's products"
        rightSection={
          <Button>
            <IoAdd className="w-6 h-6" />
            Add Product
          </Button>
        }
      >
        <Table className="p-4 border">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>Rp{product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Ellipsis className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AdminLayout>
    </>
  );
};

export default ProductManagementPage;
