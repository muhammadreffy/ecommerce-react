import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="px-8 py-3 border-t">
      <div className="flex justify-between">
        <a href="#" className="text-2xl font-bold">
          FYStore
        </a>

        <Button>Contact Me</Button>
      </div>
    </footer>
  );
};
