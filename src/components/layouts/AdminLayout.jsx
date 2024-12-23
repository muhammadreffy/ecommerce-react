import { IoAdd, IoCart, IoPerson, IoPricetag } from "react-icons/io5";
import { Button } from "../ui/button";

const SidebarItem = (props) => {
  const { children } = props;
  return (
    <Button
      variant="ghost"
      size="lg"
      className="items-center justify-start w-full"
    >
      {children}
    </Button>
  );
};

export const AdminLayout = (props) => {
  const { title, description, rightSection, children } = props;
  return (
    <>
      <div className="flex">
        <aside className="h-screen border-r w-72">
          <div className="flex flex-col items-center justify-center h-16 border-b">
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          </div>

          <div className="flex flex-col py-4">
            <SidebarItem>
              <IoPricetag className="w-6 h-6" />
              Products Management
            </SidebarItem>

            <SidebarItem>
              <IoCart className="w-6 h-6" />
              Orders Management
            </SidebarItem>
          </div>
        </aside>

        <div className="flex-1">
          <header className="flex items-center justify-end w-full h-16 px-8 border-b">
            <Button size="icon" className="rounded-full">
              <IoPerson className="w-6 h-6" />
            </Button>
          </header>

          <main className="flex flex-col p-4">
            <div className="flex items-center justify-between pb-4 mb-4 border-b">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-muted-foreground">{description}</p>
              </div>

              {rightSection}
            </div>

            {children}
          </main>
        </div>
      </div>
    </>
  );
};
