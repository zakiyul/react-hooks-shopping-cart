import { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    console.log(cart);
    localStorage.setItem("carts", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
