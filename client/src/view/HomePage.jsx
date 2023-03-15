import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="nav-h2">
        <h2>
          Shop the unexpected at Vixi's Webshop - where every purchase is an
          adventure!
        </h2>
      </div>
      <div className="buttons">
        <Link style={{ textDecoration: "none" }} to={"/products"}>
          <button className="btn-two">Start Shopping!</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/products"}>
          <button className="btn-two">About us!</button>
        </Link>
      </div>
    </div>
  );
}
