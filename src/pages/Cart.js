import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import CartComp from "../components/CartComp";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const cartPrices = cart.map((c) => c.price * c.qty);
  const reducer = (acc, currnt) => acc + currnt;

  return (
    <div>
      <div className="container">
        <div className="d-inline">
          <h4>Cart</h4>
          <h4 class="badge rounded-pill bg-success p-2 text-white ml-auto">
            Total Belanja : $ {cart.length ? cartPrices.reduce(reducer) : 0}
          </h4>
        </div>
        <hr />
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
      </div>
    </div>
  );
}
