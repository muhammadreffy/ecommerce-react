import { Header } from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <main className="px-8 mt-4 ">
        <section className="flex items-center justify-center min-h-[80vh] h-full flex-col gap-y-2">
          <h1 className="font-bold text-gray-900 sm:text-6xl">
            Become a trend-setter with us
          </h1>

          <p className="text-lg text-center max-w-prose">
            FYStore provides you with the finest clothings and ensures your
            confidence throughout your days
          </p>
        </section>
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
