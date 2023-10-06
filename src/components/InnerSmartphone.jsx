import { useEffect } from "react";
import { useParams } from "react-router-dom";

function InnerSmartphone() {
  const { id } = useParams();
  useEffect(
    async function fetchProduct() {
      try {
        const response = fetch(`https://dummyjson.com/products/${id}`);
        const data = response.json();
        console.log(data);
        console.log(id);
      } catch (error) {
        console.error("error", error);
      }
      fetchProduct();
    },
    [id]
  );
  return <div>{id}</div>;
}

export default InnerSmartphone;
