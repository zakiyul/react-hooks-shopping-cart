import { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../components/Card";

export default function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await Axios.get(`https://fakestoreapi.com/products`);
    setProducts(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
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
