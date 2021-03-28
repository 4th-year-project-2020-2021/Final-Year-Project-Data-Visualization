import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
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
        <Link to="/create" style={{ marginRight: 30 }}>Create</Link>
      </li>
      <li>
        <Link to="/item" style={{ marginRight: 30 }}>Item</Link>
      </li>
      <li>
        <Link to="/upload" style={{ marginRight: 30 }}>Upload</Link>
      </li>
      <li>
        <Link to="/discussion" style={{ marginRight: 30 }}>Discussion</Link>
      </li>
      <li>
        <Link
          to="/profile"
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 15,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
          <span style={{ marginTop: 30 }}>
            {userObj.displayName
              ? `${userObj.displayName}'s Profile`
              : "Profile"}
          </span>
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;