import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { ADD_TO_CART } from "../context/Reducers";

export default function DetailProduct() {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const { dispatch } = useContext(CartContext);

  const getProduct = async () => {
    const response = await Axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(response.data);
  };

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      cart: {
        ...product,
      },
    });
  };

  useEffect(() => {
    getProduct();
  });

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h4> {product.title} </h4>
            <Table className="mt-5">
              <button
                onClick={addToCart}
                className="btn btn-success btn-sm mb-2"
              >
                <AiOutlineShoppingCart /> add to cart
              </button>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>$ {product.price} </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{product.description}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
