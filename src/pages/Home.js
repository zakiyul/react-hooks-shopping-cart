import { useEffect, useState } from "react";
import Axios from "axios";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await Axios.get(
      `https://fakestoreapi.com/products?limit=6`
    );
    setProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
