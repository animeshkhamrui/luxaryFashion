import React from 'react'
import { Link } from 'react-router-dom';
import "./RegLog.css";

const Login = () => {
  return (
    <div>
      <section className="vh-150 bg-image backImage m-5">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ border_radius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login Your account
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                        />
                        <label
                          className="form-label"
                          for="email"
                        >
                          Your Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          name="password"
                        />
                        <label
                          className="form-label"
                          for="password"
                        >
                          Password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Are you new in here ?{" "}
                        <Link to="/register" className="fw-bold text-body text-decoration-none">
                          Register Here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
