import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";

import Navbar from "../components/Navbar";

export default function DetailProduct() {
  let { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const response = await Axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h4> {product.title} </h4>
            <Table className="mt-5">
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
