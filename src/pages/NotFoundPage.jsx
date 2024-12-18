import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-10">
      <p className="text-6xl font-semibold">404: Page not found!</p>

      <Link to="/">
        <Button>
          <IoArrowBackOutline />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
