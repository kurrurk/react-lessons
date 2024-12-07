import React, { useEffect, useState} from "react";

import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";
import useHttp from "./hooks/use-http";

function App() {

  const [products, setProducts] = useState([]);  

  const {isLoading, error, sendHttpRequest: fetchProducts} = useHttp()

  // const fetchProducts = async (productText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-course-http-bf9b0-default-rtdb.firebaseio.com/products.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Ошибка запроса.");
  //     }

  //     const data = await response.json();

  //     const loadedProducts = [];

  //     for (const productKey in data) {
  //       loadedProducts.push({ id: productKey, text: data[productKey].text });
  //     }

  //     setProducts(loadedProducts);
  //   } catch (err) {
  //     setError(err.message || "Что-то пошло не так...");
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const manageProducts = (productsData) => {

      const loadedProducts = [];
      
      for (const productKey in productsData) {
          loadedProducts.push({ id: productKey, text: productsData[productKey].text });
      }
  
      setProducts(loadedProducts);
  
    }
    fetchProducts({
      url: "https://react-course-http-bf9b0-default-rtdb.firebaseio.com/products.json"
    },manageProducts);
  }, [fetchProducts]);

  const productAddHandler = (product) => {
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  return (
    <React.Fragment>
      <NewProduct onAddProduct={productAddHandler} />
      <Products
        items={products}
        loading={isLoading}
        error={error}
        onFetch={fetchProducts}
      />
    </React.Fragment>
  );
}

export default App;
