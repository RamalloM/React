import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const functionProducts = idCategory ? getProductsByCategory : getProducts;

    functionProducts(idCategory)
      .then((res) => setProducts(res))
      .catch((error) => console.error(error));
  }, [idCategory]);

  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
