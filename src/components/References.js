import React, { Component } from 'react';
import reactLogo from '../logo.svg';

export default class References extends Component {
    render() {
        return (
            <div>
            <div className="jumbotron text-center mt-4">
                <div className="col-sm-8 mx-auto">
                    <img src={reactLogo} className="App-logo tinyLogo" alt=" " />
                </div>
            </div>
            <div className="jumbotron text-center mt-4">
                <div className="col-sm-8 mx-auto">
                    <img src={reactLogo} className="App-logo-reverse tinyLogo" alt=" " />
                </div>
            </div>
            <div className="jumbotron text-center mt-4">
                <div className="col-sm-8 mx-auto">
                    <img src={reactLogo} className="App-logo tinyLogo" alt=" " />
                </div>
            </div>
            </div>
        )
    }
}