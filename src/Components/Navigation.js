/**
 * @author Jina Kim
 *
 * Navigation - For authenticated users (After login)
 * 
 * Hidden components will be visible after login.
 * 
 * Display User name on the screen.
 * 
 */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Referances
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://reactnavigation.org/docs/link/
// https://reactrouter.com/web/guides/quick-start
// https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component

const Navigation = ({ userObj }) => (
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
        <Link to="/create" style={{ marginRight: 30 }}>Symptom</Link>
      </li>
      <li>
        <Link to="/item" style={{ marginRight: 30 }}>Data</Link>
      </li>
      <li>
        <Link to="/upload" style={{ marginRight: 30 }}>Upload</Link>
      </li>
      <li>
        <Link to="/discussion" style={{ marginRight: 30 }}>Share</Link>
      </li>
      <li>
        <Link className="font"
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

