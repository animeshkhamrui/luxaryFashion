import React, { useState } from "react";
import ItemJson from "./Item.json";
import { Link } from "react-router-dom";

const Products = () => {
  const [filter, setFilter] = useState(ItemJson.item);

  const filterProduct=(p)=>{
    const updateList=ItemJson.item.filter((x)=>x.category===p);
    setFilter(updateList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(ItemJson.item)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Men's")}>Men's Cloth</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Women's")}>Women's Cloth</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Jewellarys")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Electronics")}>Electronics</button>
        </div>
        {filter.map((p) => {
          return (
            <div key={p.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" style={{ width: "18rem" }}>
                <img src={p.image} className="card-img-top" height="250px" alt="..." />
                <div className="card-body">
                  <h5 className="card-title mb-0">{p.title}...</h5>
                  <p className="card-text lead fw-bold">${p.price}</p>
                  <Link to={`/product/${p.id}`} className="btn btn-outline-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts/>
        </div>
      </div>
    </div>
  );
};

export default Products;
