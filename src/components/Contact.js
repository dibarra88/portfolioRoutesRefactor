import React, { Component } from 'react';
import reactLogo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div className="jumbotron text-center mt-4">
                <div className="col-sm-8 mx-auto">
                    <h3>Here are a few ways you can't contact me</h3>
                    <img src={reactLogo} className="App-logo" alt=" " />
                    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Smoke Signal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Bottle Message</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Morse Code</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Sky Writting</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Yodel</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Semaphore</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}