import { CartProvider } from "./CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="mx-auto flex max-w-6xl flex-col gap-6 p-4 md:flex-row">
          <div className="w-full md:w-2/3">
            <ProductList />
          </div>

          <div className="w-full md:w-1/3">
            <Cart />
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;