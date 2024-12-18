import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-8 py-3 border-t">
      <div className="flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          FYStore
        </Link>

        <Button>Contact Me</Button>
      </div>
    </footer>
  );
};
