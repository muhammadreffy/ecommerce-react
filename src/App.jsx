import { Header } from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-8 mt-4">
        <h1>Hello World</h1>
        <Button>Click Me</Button>
      </main>

      <footer className="px-8 py-3 border-t">
        <div className="flex justify-between">
          <a href="#" className="text-2xl font-bold">
            FYStore
          </a>

          <Button>Contact Me</Button>
        </div>
      </footer>
    </>
  );
}

export default App;
