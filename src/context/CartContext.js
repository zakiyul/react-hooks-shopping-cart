import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
