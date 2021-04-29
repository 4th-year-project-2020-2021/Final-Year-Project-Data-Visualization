import React from "react";
import { Link } from "react-router-dom";

const Navigation2 = () => (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50, fontFamily: "Sans-serif" }}>
      <li>
        <Link to="/" style={{ marginRight: 30 }}>Home</Link>
      </li>
      <li>
        <Link to="/covid19" style={{ marginRight: 30 }}>Covid-19</Link>
      </li>
      <li>
        <Link to="/stats" style={{ marginRight: 30 }}>Stats</Link>
      </li>
      <li>
        <Link to="/mersandsars" style={{ marginRight: 30 }}>MersSars</Link>
      </li>
      <li>
        <Link to="/comparison" style={{ marginRight: 30 }}>Comparison</Link>
      </li>
      <li>
        <Link to="/smallpox" style={{ marginRight: 30 }}>Smallpox</Link>
      </li>
      <li>
        <Link to="/auth" style={{ marginRight: 30 }}>Login</Link>
      </li>
      <li>
      </li>
    </ul>
  </nav>
);
export default Navigation2;