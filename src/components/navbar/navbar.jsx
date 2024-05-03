import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Outlet, Link } from "react-router-dom";


function navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="navbar-container container">
                    <a className="navbar-brand" href="/">
                        <div className="main-text">SIMPLON</div>
                        <div className="sub-text">BEAUTY CARE</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About us</Link>
                              
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact us</Link>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hair</a></li>
                                    <li><a className="dropdown-item" href="#">Skin</a></li>
                                    <li><a className="dropdown-item" href="#">Jewelry</a></li>
                                    <li><a className="dropdown-item" href="#">MakeUp Kits</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Arts</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Cart <HiOutlineShoppingCart /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default navbar