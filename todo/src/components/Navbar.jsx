import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between border-b bg-white p-4">
      <h1 className="text-xl font-bold">My Shop</h1>
      <p className="rounded border px-3 py-2">
        Cart Items: {totalItems}
      </p>
    </nav>
  );
}