import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div
      className="nav  navbar-expand-lg bg-color  "

    >
      <div className="container cont ">
  

        <div className="row  text-center ">
          <div className="col-3">
            <lottie-player
              src="https://lottie.host/274e7c82-0be2-49f9-9763-939ec064129f/k8ppzLVNWR.json"
              background="##fff"
              speed={1}
              style={{ width: 120, height: 120 }}
              loop=""
              autoPlay=""
              direction={1}
              mode="normal"
              className="d-inline-block align-text-center brand-logo"
            />
          </div>
          <div className="col-6 ">
            <Link className="null-link m-text text-center" to="/">
              Medizon
            </Link>
          </div>
          <div className="col-3 text-center l-top">
            <Link to={'/login'}>
            <button className="btn btn-outline-light text-center" type="submit">
              <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
            </button>
            </Link>
          </div>
        </div>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
