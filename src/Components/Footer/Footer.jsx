import React, { Component, Fragment } from 'react';
// import { ReactComponent as Fast } from "../../images/svg/fast.svg";
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-white p-5 mt-3">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <div><i className="fas fa-dollar-sign fa-2x icHov"></i></div>
                                    <h3 className="my-2">Great Value</h3>
                                    <h5 className="font-weight-lighter">We Offer Competitive Prices On Our 100 Million + Products</h5>
                                </div>
                            </div>
                            <div className="vrl"></div>
                            <div className="col">
                                <div className="text-center">
                                    <div><i className="fas fa-truck fa-2x icHov"></i></div>
                                    <h3 className="my-2">Worldwide Delivery</h3>
                                    <h5 className="font-weight-lighter">With Sites In Many Languages, We Ship To Over 100 Countries & Regions.</h5>
                                </div>
                            </div>
                            <div className="vrl"></div>
                            <div className="col">
                                <div className="text-center">
                                    <div><i className="fas fa-money-check-alt fa-2x icHov"></i></div>
                                    <h3 className="my-2">Safe Payment</h3>
                                    <h5 className="font-weight-lighter">Pay With The World's Most Popular And Secure Payment Methods.</h5>
                                </div>
                            </div>
                            <div className="vrl"></div>
                            <div className="col">
                                <div className="text-center">
                                    <div><i className="fas fa-clipboard-check fa-2x icHov"></i></div>
                                    <h3 className="my-2">Shop With Confidence</h3>
                                    <h5 className="font-weight-lighter">Our Buyer Protection Covers Your Purchase From Clicks To Delivery.</h5>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div>
                                    <hr className="bg-muted" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                                <div>
                                    <h4 className="my-3">Stay Connected</h4>
                                    <div>
                                        <i className="fab fa-facebook-square fa-3x icHov"></i>
                                        <i className="fab fa-linkedin fa-3x mx-3 icHov"></i>
                                        <i className="fab fa-instagram-square fa-3x icHov"></i>
                                        <i className="fab fa-whatsapp fa-3x mx-3 icHov"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-0 col-md-6">

                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <div>
                                    <h5 className="mb-3">Shopping With Us</h5>
                                    <p className="font-weight-lighter">Making Payments</p>
                                    <p className="font-weight-lighter">Delivery Options</p>
                                    <p className="font-weight-lighter">Buyer Protection</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <div>
                                    <h5 className="mb-3">Shopping With Us</h5>
                                    <p className="font-weight-lighter">Making Payments</p>
                                    <p className="font-weight-lighter">Delivery Options</p>
                                    <p className="font-weight-lighter">Buyer Protection</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <div>
                                    <h5 className="mb-3">Shopping With Us</h5>
                                    <p className="font-weight-lighter">Making Payments</p>
                                    <p className="font-weight-lighter">Delivery Options</p>
                                    <p className="font-weight-lighter">Buyer Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

