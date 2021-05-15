import React, { Fragment } from 'react';
import icon from "../../images/icon.png";
import Ellipse3 from "../../images/Ellipse3.png";

import { ReactComponent as Message } from "../../images/svg/navIcon/message.svg";
import { FiBell } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import './Navbar.css';

function Navbar() {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-xl navbar-dark navBg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://translate.google.com/"><img src={icon} alt=".." height="50px" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <i className="fas fa-bars mx-3 fa-2x text-white"></i>
                        <form className="form-inline mr-5 position-relative">
                            <input className="form-control shadow-none serachInput" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn searchColor px-4 text-white" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://translate.google.com/"><i className="fas fa-home fa-lg"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-5" href="https://translate.google.com/"><i className="fab fa-youtube fa-lg"></i> Trade Tube</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://translate.google.com/"><i className="fas fa-dollar-sign"></i> USD <i className="fas fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mr-5" href="https://translate.google.com/"><i className="fas fa-globe"></i> EN <i className="fas fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <IoPersonOutline className="navIcon mx-2 text-white mt-2 icon11" size={25} />
                            </li>
                            <li className="nav-item">
                                <FiBell className="navIcon text-white mt-2" size={25} />
                            </li>
                            <li className="nav-item">
                                <FiShoppingCart className="navIcon mx-2 text-white mt-2" size={25} />

                            </li>
                            <li className="nav-item">
                                <Message className="navIcon text-white mt-2 icon11" width="25px" height="25px" />
                            </li>
                        </ul>
                        <div className="text-white">
                            <a href="https://translate.google.com/"><img src={Ellipse3} alt=".." height="50px" /></a>
                            <span className=" ml-2 mr-1">Mr 1 Taher</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;
