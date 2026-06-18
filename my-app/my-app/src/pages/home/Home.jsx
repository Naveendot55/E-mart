import React from "react";
import "./Home.css";
import Carousel from "../../compoments/caro/Carousel";
import Categorycards from "../../compoments/Categorycards";
import axios from "axios";
import { useEffect, useState } from "react";
import Productcard from "../../compoments/Productcard";
import { useSearchParams } from "react-router-dom";

const Home = ({ onAddToCart, cartItems = [], onIncrease, onDecrease }) => {
  let [storeproducts, setstoreproducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const query = (searchParams.get("q") || "").toLowerCase();
  useEffect(() => {
    async function getproducts() {
      let k = await axios.get('https://dummyjson.com/products?limit=100');
      console.log(k.data.products);
      setstoreproducts(k.data.products);
    }
    getproducts();
  }, []);
  return (
    <div>
      <Carousel />
      <div>
        <h1>Categores</h1>
        <div className="d-flex justify-content-start column-gap-4">
          <Categorycards
            filename={"women.png"}
            categoryname={"Women"}
            onClick={() => setSearchParams({ category: "women" })}
          />
          <Categorycards
            filename={"men.png"}
            categoryname={"Men"}
            onClick={() => setSearchParams({ category: "men" })}
          />
          <Categorycards
            filename={"cloths.png"}
            categoryname={"Cloths"}
            onClick={() => setSearchParams({ category: "clothing" })}
          />
          <Categorycards
            filename={"food.png"}
            categoryname={"Food"}
            onClick={() => setSearchParams({ category: "food" })}
          />
        </div>
      </div>
      <div>
        <h1>Products</h1>
        <div className="d-flex justify-content-start column-gap-5 row-gap-5 flex-wrap" >
        {storeproducts &&
          storeproducts.length > 0 &&
          storeproducts
            .filter((p) => {
              if (query) {
                const hay = `${p.title || ""} ${p.description || ""} ${p.brand || ""}`.toLowerCase();
                if (!hay.includes(query)) return false;
              }
              if (!selectedCategory) return true;
              const cat = String(p.category || "").toLowerCase();
              if (selectedCategory === "women") return cat.includes("women");
              if (selectedCategory === "men") return cat.includes("men");
              if (selectedCategory === "clothing") return cat.includes("men") || cat.includes("women") || cat.includes("shirt") || cat.includes("tops");
              if (selectedCategory === "food") return cat.includes("grocer") || cat.includes("food");
              return true;
            })
            .map(product => {
              return (
                <Productcard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Home;
