import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse bg-inverse rounded navbar-toggleable-md">
            <NavLink className="navbar-brand" to="/">Routes</NavLink>
    
            <div className="collapse navbar-collapse" id="containerNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/References">References</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}