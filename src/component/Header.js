import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light text-dark border-bottom box-shadow fixed-top">
                <Link to="/"><h5 className="my-0 mr-md-auto font-weight-bold">GinRaiDee</h5></Link>
            </div>
        )
    }
}