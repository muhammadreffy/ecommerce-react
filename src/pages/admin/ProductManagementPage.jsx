import { AdminLayout } from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { ChevronLeft, ChevronRight, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const ProductManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  const [hasNextPage, setHasNextPage] = useState(true);

  const [productName, setProductName] = useState("");

  const handleNextPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) + 1);

    setSearchParams(searchParams);
  };

  const handlePreviousPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) - 1);

    setSearchParams(searchParams);
  };

  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _per_page: 5,
          _page: Number(searchParams.get("page")),
          name: searchParams.get("search"),
        },
      });

      setHasNextPage(Boolean(response.data.next));

      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchProduct = () => {
    if (productName) {
      searchParams.set("search", productName);

      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");

      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      getProducts();
    }
  }, [searchParams.get("page"), searchParams.get("search")]);

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);

      setSearchParams(searchParams);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("page") < 1) {
      searchParams.set("page", 1);

      getProducts();

      setSearchParams(searchParams);
    }
  }, []);

  return (
    <>
      <AdminLayout
        title="Product Management Page"
        description="Manage our store's products"
        rightSection={
          <Link to="/admin/products/create">
            <Button>
              <IoAdd className="w-6 h-6" />
              Add Product
            </Button>
          </Link>
        }
      >
        <div className="mb-4">
          <Label>Search product name</Label>
          <div className="flex mt-1 gap-x-4">
            <Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Search products..."
              className="max-w-[400px]"
            />
            <Button onClick={searchProduct}>Search</Button>
          </div>
        </div>

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
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>Rp{product.price.toLocaleString("id-ID")}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Link to={`/admin/products/edit/${product.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-6 h-6" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <Button
                disabled={searchParams.get("page") == 1}
                variant="ghost"
                onClick={handlePreviousPage}
              >
                <ChevronLeft className="w-6 h-6" />
                Previous
              </Button>
            </PaginationItem>

            <PaginationItem className="mx-8 font-semibold">
              {searchParams.get("page")}
            </PaginationItem>

            <PaginationItem>
              <Button
                disabled={!hasNextPage}
                variant="ghost"
                onClick={handleNextPage}
              >
                Next
                <ChevronRight className="w-6 h-6" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </AdminLayout>
    </>
  );
};

export default ProductManagementPage;
