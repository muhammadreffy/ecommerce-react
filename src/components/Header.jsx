import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-8 py-3 border-b">
      <nav className="flex items-center justify-between">
        {/* BRAND */}
        <Link to="/" className="text-2xl font-bold">
          FYStore
        </Link>

        {/* FORM SEARCH */}
        <Input placeholder="Search products..." className="max-w-[600px]" />

        {/* BUTTONS */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <Link to="/cart">
              <Button size="icon" variant="ghost">
                <IoCart className="w-6 h-6" />
              </Button>
            </Link>

            <Button size="icon" variant="ghost">
              <IoHeart className="w-6 h-6" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-5" />

          <div className="flex items-center gap-x-2">
            <Button>Login</Button>
            <Button variant="outline">Register</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
