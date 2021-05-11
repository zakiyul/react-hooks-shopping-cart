import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import CartComp from "../components/CartComp";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const cartPrices = cart.map((c) => c.price);
  const reducer = (acc, currnt) => acc + currnt;

  return (
    <div>
      <div className="container">
        <h4>Cart</h4>
        {cart.length
          ? cart.map((c) => (
              <CartComp
                cartId={c.id}
                img={c.image}
                title={c.title}
                price={c.price}
                qty={c.qty}
              />
            ))
          : "Tidak ada item di cart"}
        <h5>
          Total Belanja : $ {cart.length ? cartPrices.reduce(reducer) : 0}
        </h5>
      </div>
    </div>
  );
}
