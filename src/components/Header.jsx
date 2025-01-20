import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect } from "react";
import { getCart } from "@/services/cartService";
import { History } from "lucide-react";

export const Header = () => {
  const userSelector = useSelector((state) => state.user);
  const cartSelector = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("CURRENT_USER");

    dispatch({
      type: "USER_LOGOUT",
    });
  };

  useEffect(() => {
    getCart(userSelector.id);
  }, []);

  return (
    <header className="px-8 py-3 border-b fixed w-full bg-white top-0">
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
              <Button size="icon" variant="ghost" className="relative">
                <IoCart className="w-6 h-6" />
                <div className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  <span className="text-xs p-3">
                    {cartSelector.items.length}
                  </span>
                </div>
              </Button>
            </Link>

            <Link to="/order-histories">
              <Button size="icon" variant="ghost">
                <History className="w-6 h-6" />
              </Button>
            </Link>
          </div>

          <Separator orientation="vertical" className="h-5" />

          <div className="flex items-center gap-x-2">
            {userSelector.id ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  Hello, {userSelector.username}
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
