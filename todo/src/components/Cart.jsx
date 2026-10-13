import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="h-fit rounded border bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-2 border-b pb-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch({ type: "remove", id: item.id })
                }
                className="rounded border px-2 py-1 hover:bg-gray-100"
              >
                Remove
              </button>
                <button
              onClick={() =>
                dispatch({ type: "add", product:item })
              }
              className="rounded border px-3 py-2 hover:bg-gray-100"
            >
              Add
            </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex justify-between gap-2 border-t pt-4 font-semibold">
        <span>Total Price</span>
        <span>₹{totalPrice.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}