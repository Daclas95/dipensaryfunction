import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div>        
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa fa-bars"></i>
          </label>
          <label className="logo">Family Care</label>
          <ul>
            <li>
              <NavLink
                exact
                to="/channeling"
                activeClassName="main-nav-active"
              >
                Channeling
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/medical"
                activeClassName="main-nav-active"
              >
                Medical
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/pharmacy"
                activeClassName="main-nav-active"
              >
                Pharmacy
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/finance"
                activeClassName="main-nav-active"
              >
                Finance
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/stock"
                activeClassName="main-nav-active"
              >
                Stock
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar
