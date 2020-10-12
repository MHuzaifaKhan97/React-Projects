import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-3" href="#">Dynamic Routing</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-3 ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/' >Home </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;