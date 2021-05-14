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
                    <a className="navbar-brand ml-5" href="https://translate.google.com/"><img src={icon} alt=".." height="50px" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <i className="fas fa-bars mx-3 fa-2x text-white tog"></i>
                    <form className="form-inline mr-5 navForm">
                        <input className="form-control shadow-none mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn searchColor px-4 text-white" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link mt-3" href="https://translate.google.com/"><i className="fas fa-home fa-lg"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-5 mt-3" href="https://translate.google.com/"><i className="fab fa-youtube fa-lg"></i> Trade Tube</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  mt-3" href="https://translate.google.com/"><i className="fas fa-dollar-sign"></i> USD <i className="fas fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mr-4 mt-3" href="https://translate.google.com/"><i className="fas fa-globe"></i> EN <i className="fas fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white mt-3 togSty">
                                    <IoPersonOutline className="navIcon" size="1.7em" />
                                    <FiBell className="navIcon  mx-2" size="1.7em" />
                                    <FiShoppingCart className="navIcon mr-1" size="1.7em" />
                                    <Message className="navIcon mx-2" width="24.32px" height="24.32px" />

                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white togSty">
                                    <a href="https://translate.google.com/"><img src={Ellipse3} alt=".." height="50px" /></a>
                                    <span className=" ml-2 mr-1">Mr 1 Taher</span>
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;
