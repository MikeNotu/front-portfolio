import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../Navbar/Navbar.scss";

function Navbar() {
  useEffect(() => {
    let header = document.querySelector("h1");
    let text = header.textContent.toLowerCase();
    let color;
    switch (text) {
      case "about":
        color = "#16A085";
        break;
      case "projects":
        color = "#E74C3C";
        break;
      case "contacts":
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }
    // update the custom property for the root element and have it cascade on the header as well
    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  });
  /* render 
  - a nav with a header and three anchor links elements
    in the nav, include Links from the routing library, directing toward differents paths
  - a header displaying the path of the application
    through a switch, include routes which exclude one another 
    render a simple element in the route to visualize the change in the URL path
  */

  return (
    <div className="App">
      <nav className="Navbar">
        <h2>btf</h2>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/projects">
          <h1>Projects</h1>
        </Route>
        <Route path="/contacts">
          <h1>Contacts</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Navbar;
