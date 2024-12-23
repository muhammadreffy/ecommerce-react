import { AdminLayout } from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
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
        <h2>Product Management Page Content</h2>
      </AdminLayout>
    </>
  );
};

export default ProductManagementPage;
