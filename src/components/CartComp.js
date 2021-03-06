import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  REMOVE_FROM_CART,
  INCREASE_QTY,
  REDUCE_QTY,
} from "../context/Reducers";
import classes from "./CartComp.module.css";

const CartComp = (props) => {
  const { dispatch } = useContext(CartContext);
  const removeFromCart = (cartId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      id: cartId,
    });
  };

  const incrementQty = (cartId) => {
    dispatch({
      type: INCREASE_QTY,
      id: cartId,
    });
  };

  const decrementQty = (cartId) => {
    dispatch({
      type: REDUCE_QTY,
      id: cartId,
    });
  };

  return (
    <div className={`card p-3 mb-2 border-0 shadow-sm`}>
      <div className="row">
        <div className="col-md-1 col-6">
          <img
            className={classes.ukuranKecil}
            src={props.img}
            alt={props.title}
          />
        </div>
        <div className="col-6">
          <h6>{props.title}</h6>
          <small>$ {props.price}</small> <br />
          <button
            onClick={() => decrementQty(props.cartId)}
            className="btn btn-danger btn-sm mr-1"
          >
            -
          </button>
          <span>Qty : {props.qty}</span>
          <button
            onClick={() => incrementQty(props.cartId)}
            className="btn btn-success btn-sm ml-1"
          >
            +
          </button>
          <br />
          <button
            onClick={() => removeFromCart(props.cartId)}
            // onClick={() => console.log("clicked")}
            className="btn btn-danger btn-sm mt-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
