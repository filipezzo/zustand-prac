import { CartApp } from "./components/cart-app";
import { DialogApp } from "./components/dialog-app";
import { ListProducts } from "./components/list-products";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 p-10 text-white">
      <div className=" min-h-screen max-w-2xl mx-auto">
        <header className="flex items-center justify-between">
          <DialogApp />
          <CartApp />
        </header>

        <ListProducts />
      </div>
    </div>
  );
}

export default App;
