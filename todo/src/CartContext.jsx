import { createContext,useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const existingProduct = state.find((item) => {
        return item.id === action.product.id;
      });
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        return [
          ...state,
          {
            ...action.product,
            quantity: 1,
          },
        ];
      }
    }
    case "remove": {
      const existingProduct = state.find((item) => {
        return item.id === action.id;
      });

      if (!existingProduct) return state;

      if (existingProduct.quantity > 1) {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return state.filter((item) => {
        return item.id !== action.id;
      });
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
