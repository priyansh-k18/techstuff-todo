import { useContext } from "react";
import { CartContext } from "../CartContext";

const products = [
  { id: 1, name: "Headphones", price: 2000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1200 },
  { id: 4, name: "Monitor", price: 8500 },
  { id: 5, name: "Laptop", price: 55000 },
  { id: 6, name: "Webcam", price: 1800 },
  { id: 7, name: "Microphone", price: 2500 },
  { id: 8, name: "Speakers", price: 1500 },
  { id: 9, name: "USB Hub", price: 800 },
  { id: 10, name: "Mouse Pad", price: 300 },
];

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="rounded border bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">Products</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-3 rounded border p-3"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-gray-600">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </div>

            <button
              onClick={() =>
                dispatch({ type: "add", product })
              }
              className="rounded border px-3 py-2 hover:bg-gray-100"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}