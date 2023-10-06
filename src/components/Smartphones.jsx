import PageNav from "./PageNav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Smartphones() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSmartphones() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data = await response.json();
        setProduct(data.products); // Assuming data is an object with a 'products' property
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(false);
      }
    }
    fetchSmartphones();
  }, []);

  return (
    <>
      <PageNav />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : product.length > 0 ? (
          product.map((item) => (
            <div
              style={{
                backgroundColor: "#ffc107",
                margin: "0 20px 20px",
              }}
            >
              <div
                style={{ width: "355px", height: "200px" }}
                className="product_image"
              >
                <Link to={`inner/${item.id}`}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={item.thumbnail}
                  />
                </Link>
              </div>
              <div className="product_body">
                <p style={{ color: "black", fontSize: "20px" }} key={item.id}>
                  {item.title}
                  <span>{item.brand}</span>
                </p>
                <div style={{ width: "355px" }}>
                  <p style={{ color: "black" }}>{item.description}</p>
                </div>
                <div style={{ color: "black" }}>
                  <span>Price: {item.price}</span>
                  <span>discount: {item.discountPercentage}%</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}

export default Smartphones;
