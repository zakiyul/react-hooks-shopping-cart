import { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [limitedProducts, setLimitedProducts] = useState([]);

  const getProducts = async () => {
    const response = await Axios.get(`https://fakestoreapi.com/products`);
    setProducts(response.data);
  };

  const getLimitedProducts = async () => {
    const response = await Axios.get(
      `https://fakestoreapi.com/products?limit=6`
    );
    setLimitedProducts(response.data);
  };

  useEffect(() => {
    getProducts();
    getLimitedProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, limitedProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
