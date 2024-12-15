import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";

export const Header = () => {
  return (
    <header className="px-8 py-3 border-b">
      <nav className="flex items-center justify-between">
        {/* BRAND */}
        <a href="#" className="text-2xl font-bold">
          FYStore
        </a>

        {/* FORM SEARCH */}
        <Input placeholder="Search products..." className="max-w-[600px]" />

        {/* BUTTONS */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <Button size="icon" variant="ghost">
              <IoCart className="w-6 h-6" />
            </Button>

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
