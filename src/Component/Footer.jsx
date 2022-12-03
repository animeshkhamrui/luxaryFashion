import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="bg-dark">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">About</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/contact" className="text-white text-decoration-none">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">
                    Stories
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">Help</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/cart" className="text-white text-decoration-none">
                    Payments
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="text-white text-decoration-none">
                    Shipping
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="text-white text-decoration-none">
                    Cancellation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="text-white text-decoration-none">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">Policy</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">
                    Return Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">
                    Terms Of Use
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">
                    Security
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/login" className="text-white text-decoration-none">
                    Login
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/register" className="text-white text-decoration-none">
                    Register
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-white text-decoration-none">
                    Sitemap
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/products" className="text-white text-decoration-none">
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4 text-white">
                Registered Office Address
              </h6>
              <p className="text-white mb-4">
               Ak Fashion Pvt Ltd. <br/>
               375, Prince Anwar Shah Road, Kolkata - 700005
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item me-3">
                  <Link to="/" target="_blank" title="twitter">
                  <i className="fa fa-2x fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/" target="_blank" title="facebook">
                    <i className="fa fa-2x fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/" target="_blank" title="instagram">
                    <i className="fa fa-2x fa-instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/" target="_blank" title="pinterest">
                    <i className="fa fa-2x fa-youtube"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" target="_blank" title="vimeo">
                    <i className="fa fa-2x fa-google"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0" />

        <div className="bg-light py-2">
          <div className="container text-center">
            <p className=" mb-0 py-2 text-dark">
              &copy; 2022 AK Fashion All risghts reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
