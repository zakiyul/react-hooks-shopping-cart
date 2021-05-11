import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

import Card from "../components/Card";

export default function App() {
  const { limitedProducts } = useContext(ProductsContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          {limitedProducts.map((product) => (
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
