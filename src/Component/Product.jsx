import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemJson from "./Item.json";
import {useDispatch} from "react-redux";
import {addProduct} from "./../Redux/Action/index";

const Product = () => {
  const { id } = useParams();
  const singleProduct = ItemJson.item.find((x) => x.id === id);

const dispatch=useDispatch();

const addcart=(product)=>{
  dispatch(addProduct(product))
}

  return (
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-md-6">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {singleProduct.category}-Fashion
          </h4>
          <h1 className="display-6">{singleProduct.title}</h1>
          <p className="lead fw-bolder">Rating {singleProduct.rating} 
          <i className="fa fa-star"/>
          </p>
          <h3 className="display-6 fw-bolder my-4">$ {singleProduct.price}</h3>
          <p className="lead">{singleProduct.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addcart(singleProduct)}>Add to Cart</button>
          <Link to="/cart"><button className="btn btn-dark ms-2 px-3 py-2">Go to Cart</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
