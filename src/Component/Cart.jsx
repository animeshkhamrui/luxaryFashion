import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {deleteProduct, addProduct} from "./../Redux/Action/";
import {Link} from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const state = useSelector((state) => state.handlecart);
  const dispatch=useDispatch();

const deleteProd=(product)=>{
  dispatch(deleteProduct(product))
}

const addProd=(product)=>{
  dispatch(addProduct(product))
}
  var totalPrice=0;
  var totalItem=0;
  return (
    <div>
      <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
               
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            My Cart
                          </h1>
                          <h6 className="mb-0 text-muted">{state.length} items</h6>
                        </div>
                        <hr className="my-4" />

                    {
                      state.map(x=>{
                        totalPrice += x.price * x.qty;
                        totalItem +=x.qty;
                        return(
                          <>
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={x.image}
                              className="img-fluid rounded-3"
                              alt={x.title}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{x.category}</h6>
                            <h6 className="text-black mb-0">{x.title}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2" onClick={()=>deleteProd(x)}>
                            <i className="fa fa-solid fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={x.qty}
                              type="text"
                              className="form-control form-control-sm"
                            />

                            <button className="btn btn-link px-2" onClick={()=>addProd(x)}>
                            <i className="fa fa-solid fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{x.qty} <i class="fa fa-times" aria-hidden="true"></i> {x.price} = $ {x.qty*x.price}</h6>
                          </div>
                        </div>

                        <hr className="my-4" />
                        </>
                        )
                      })
                    }

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                            <i className="fa fa-regular fa-arrow-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items {totalItem}</h5>
                          <h5>$ {totalPrice}</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          {state.length===0 ?  (<h5>$ 0</h5>) : (<h5>$ {totalPrice+5}</h5>) }
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Placed Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
