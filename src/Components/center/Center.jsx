import React, { useEffect, Fragment } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";
import img2 from "../../images/Group.png";
import img8 from "../../images/Rectangle.png";
import sale from "../../images/sale.png";
import img9 from "../../images/saless.png";
import sale50 from "../../images/sale50.png";
import Rectangle1 from "../../images/Rectangle1.png";
import Rectangle2 from "../../images/Rectangle2.png";
import Rectangle3 from "../../images/Rectangle3.png";
import Rectangle4 from "../../images/Rectangle4.png";
import Rectangle5 from "../../images/Rectangle5.png";
import Rectangle6 from "../../images/Rectangle6.png";
import Rectangle7 from "../../images/Rectangle7.png";
import Rectangle8 from "../../images/Rectangle8.png";
import Rectangle9 from "../../images/Rectangle9.png";
import Rectangle10 from "../../images/Rectangle10.png";
import stocks from "../../images/stocks.png";
import sale1 from "../../images/sale1.jpg";
import { ReactComponent as Fast } from "../../images/svg/fast.svg";
import { ReactComponent as Hotel } from "../../images/svg/hotel.svg";
import { ReactComponent as Basket } from "../../images/svg/shopping-basket.svg";
import { ReactComponent as Fair } from "../../images/svg/fair-stand.svg";
import { ReactComponent as Plane } from "../../images/svg/takeoff-the-plane.svg";

import { ReactComponent as Clothes } from "../../images/svg/clothes-hanger.svg";
import { ReactComponent as Medicine } from "../../images/svg/medicine.svg";
import { ReactComponent as Grocery } from "../../images/svg/grocery.svg";
import { ReactComponent as Shoe } from "../../images/svg/running-shoe.svg";
import { ReactComponent as Skincare } from "../../images/svg/skincare.svg";
import './center.css';


function Center() {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <Fragment>

            <div className=" col-xl-7 col-lg-7 col-md-7 marTop">
                <div className="col-md-12 p-0 secMar">
                    <div className="item">
                        <img src={img2} alt=".." className="img-fluid mainBrb" />
                        <i className="fas fa-chevron-left mx-3" id="prev"></i>
                        <i className="fas fa-chevron-right mx-3" id="next"></i>
                    </div>
                </div>

                {/* ---------------------Services--------------------------- */}
                <h4 className="text-center mb-4 line" data-aos="fade-up" data-aos-duration="1000">Our Services</h4>

                <div className="row justify-content-center secMar1">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xl col-lg-3 col-md-4 col-sm-4 pb-4 pr-0">
                                <div className="bg-white pt-4 pb-1 px-4 mt-3 brb text-center shadow servCol" data-aos="fade-right" data-aos-duration="1200">
                                    <Fast className="servIcon" width="70px" height="70px" />
                                    <p className="text-center mainColor font-weight-bold servTxt">Shipping</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-4 pb-4">
                                <div className="bg-white pt-4 pb-1 px-4 mt-3 brb text-center shadow servCol" data-aos="fade-right" data-aos-duration="1000">
                                    <Hotel className="servIcon" width="70px" height="70px" />
                                    <p className="text-center mainColor font-weight-bold servTxt">Hotels</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-4 pb-4 p-0">
                                <div className="bg-white pt-5 pb-4 px-4 brb text-center shadow servCol" data-aos="fade-up" data-aos-duration="1300">
                                    <Basket className="servIcon" width="110.63px" height="89.88px" />
                                    <p className="text-center mainColor font-weight-bold servTxt">Shopping</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-4 pb-4 ">
                                <div className="bg-white pt-4 pb-1 px-4 mt-3 brb text-center shadow servCol" data-aos="fade-left" data-aos-duration="1000">
                                    <Fair className="servIcon" width="70px" height="70px" />
                                    <p className="text-center mainColor font-weight-bold servTxt">Fairs</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-4 pb-4 pl-0">
                                <div className="bg-white pt-4 pb-1 px-4 mt-3 brb text-center shadow servCol" data-aos="fade-left" data-aos-duration="1200">
                                    <Plane className="servIcon" width="70px" height="70px" />
                                    <p className="text-center mainColor font-weight-bold servTxt">Airlines</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* ----------------------Services--------------------------- */}

                {/* ---------------------Categories--------------------------- */}
                <h4 className="text-center mb-4 line" data-aos="zoom-in-up" data-aos-duration="1000">Categories</h4>

                <div className="bg-white pt-4 mt-3 brbCat shadow secMar">
                    <div className="col-md-12 pb-4 p-l-4">
                        <div className="row text-center">
                            <div className="col pb-2" data-aos="fade-down" data-aos-duration="1000">
                                <div className="catDiv">
                                    <Clothes className="catIcon" width="39.3px" height="35px" />
                                    <span className="font-weight-bold ml-1 catSpan">Clothes</span>
                                </div>
                            </div>
                            <div className="col pb-2" data-aos="fade-up" data-aos-duration="1000">
                                <div className="catDiv">
                                    <Medicine className="catIcon" width="39.3px" height="35px" />
                                    <span className="font-weight-bold ml-1 catSpan">Medical</span>
                                </div>
                            </div>
                            <div className="col pb-2" data-aos="flip-right" data-aos-duration="1300">
                                <div className="catDiv">
                                    <Grocery className="catIcon" width="39.3px" height="35px" />
                                    <span className="font-weight-bold ml-1 catSpan">Grocery</span>
                                </div>
                            </div>
                            <div className="col pb-2" data-aos="fade-down" data-aos-duration="1000">
                                <div className="catDiv">
                                    <Shoe className="catIcon" width="39.3px" height="35px" />
                                    <span className="font-weight-bold ml-1 catSpan">Shoes</span>
                                </div>
                            </div>
                            <div className="col pb-2" data-aos="fade-up" data-aos-duration="1000">
                                <div className="catDiv">
                                    <Skincare className="catIcon" width="39.3px" height="35px" />
                                    <span className="font-weight-bold ml-1 catSpan">Skin Care</span>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div>
                                    <div><span className="FrtSize">See More</span>
                                        <div><i className="fas fa-chevron-down"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------Categories--------------------------- */}

                {/* ---------------------Popular Products--------------------------- */}
                <h4 className="text-center mb-4 line1" data-aos="flip-up" data-aos-duration="1000">Popular Products</h4>

                <div className="grid-container secMar">
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1600">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1400">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1400">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2" data-aos="fade-left" data-aos-duration="1600">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center secMar">
                    <button href="#" className="BtnView rounded-pill btnHov">View More</button>
                </div>
                {/* ----------------------Popular Products--------------------------- */}
                {/* ----------------------sale--------------------------- */}
                <div className="col-lg-12 p-0 secMar">
                    <div>
                        <img src={sale} alt=".." className="w-100" />
                    </div>
                </div>
                {/* ----------------------sale--------------------------- */}


                {/* ---------------------Hot Deals--------------------------- */}
                <h4 className="text-center mb-4 line" data-aos="fade-down" data-aos-duration="1000">Hot Deals</h4>

                <div className="cont2">
                    <div className="it1" data-aos="fade-up" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." />
                            <div className="py-4 px-2">
                                <p className="bigCardFont">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor bigCardPrice font-weight-bold">200 EGP</span>
                                <div className="my-4 bigCardFont">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="bigCardFont">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-2x"></i>
                                    <i className="fas fa-chart-bar iconColor fa-2x mx-3"></i>
                                    <button href="#" className="bigBtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it2" data-aos="fade-down" data-aos-duration="1600">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it3" data-aos="fade-down" data-aos-duration="1600">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it4" data-aos="fade-down-left" data-aos-duration="1400">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it5" data-aos="fade-up-right" data-aos-duration="1400">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it6" data-aos="zoom-in-up" data-aos-duration="1600">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="it7" data-aos="fade-up-left" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="card-img-top" />
                            <div className="pt-1 pb-2 px-2">
                                <span className="smallCardFont d-block">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</span>
                                <span className="mainColor font-weight-bold smCardPrice">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty btnHov ml-3">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center secMar">
                    <i className="fas fa-ellipsis-h fa-2x secColor"></i>
                </div>

                {/* ----------------------Hot Deals--------------------------- */}

                {/* ---------------------On Sale--------------------------- */}
                <h4 className="text-center mb-4 mt-3 line" data-aos="fade-down" data-aos-duration="1000">On Sale</h4>

                <div className="grid-container">
                    <div className=" mb-4" data-aos="fade-right" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <span className="sale saleBrb">20%</span>
                            <div className="py-3 px-2 ">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4" data-aos="fade-right" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <span className="sale saleBrb">20%</span>
                            <div className="py-3 px-2 ">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <span className="sale saleBrb">20%</span>
                            <div className="py-3 px-2 ">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart iconColor fa-lg"></i>
                                    <i className="fas fa-chart-bar mainColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4" data-aos="fade-left" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <span className="sale saleBrb">20%</span>
                            <div className="py-3 px-2 ">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center secMar">
                    <button href="#" className="BtnView rounded-pill btnHov">View More</button>
                </div>
                {/* ----------------------On Sale--------------------------- */}

                {/* ---------------------Trade Tube--------------------------- */}
                <h4 className="text-center mb-4 mt-3 line">Trade Tube</h4>

                <div className="cont4">
                    <div className=" mb-2" data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card cardBrb item1">
                            <div className="card-image">
                                <img src={sale1} alt=".." className="img-fluid tradeBrb" />
                                <div className="overlay tradeBrb"></div>
                            </div>
                            <i className="fas fa-play fa-2x" id="play"></i>
                            <div className="pt-1 pb-2 px-2">
                                <span className="d-block">Travel Tips</span>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                        ipsum dolor sit amet, conseteturLorem ipt,</p>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-2" data-aos="flip-left" data-aos-duration="1400">
                        <div className="card cardBrb item1">
                            <div className="card-image">
                                <img src={sale1} alt=".." className="img-fluid tradeBrb" />
                                <div className="overlay tradeBrb"></div>
                            </div>
                            <i className="fas fa-play fa-2x" id="play"></i>
                            <div className="pt-1 pb-2 px-2">
                                <span className="d-block">Travel Tips</span>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                        ipsum dolor sit amet, conseteturLorem ipt,</p>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-2" data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card cardBrb item1">
                            <div className="card-image">
                                <img src={sale1} alt=".." className="img-fluid tradeBrb" />
                                <div className="overlay tradeBrb"></div>
                            </div>
                            <i className="fas fa-play fa-2x" id="play"></i>
                            <div className="pt-1 pb-2 px-2">
                                <span className="d-block">Travel Tips</span>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                        ipsum dolor sit amet, conseteturLorem ipt,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2 mb-5">
                    <button href="#" className="BtnView rounded-pill btnHov">View More</button>
                </div>
                {/* ----------------------Trade Tube--------------------------- */}

                {/* ---------------------sale50--------------------------- */}

                <div className="cont4 secMar">
                    <div className=" mb-4" data-aos="zoom-in-left" data-aos-duration="1000">
                        <div>
                            <img src={img9} alt=".." className="img-fluid" />
                        </div>
                    </div>
                    <div className=" mb-4" data-aos="flip-left" data-aos-duration="1400">
                        <div>
                            <img src={sale50} alt=".." className="img-fluid" />
                        </div>
                    </div>
                    <div className=" mb-4" data-aos="zoom-in-right" data-aos-duration="1000">
                        <div>
                            <img src={sale50} alt=".." className="img-fluid" />
                        </div>
                    </div>
                </div>
                {/* ----------------------sale50--------------------------- */}

                {/* ---------------------Classify--------------------------- */}
                <h4 className="text-center mb-4 line">Classify</h4>

                <div className="row secMar">
                    <div className="col-xl-6 col-lg-6 mb-3" data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Smart Tech</h6>
                            <div>
                                <div className="cont4 justify-content-between m-auto">
                                    <div className="pr-0 pb-3">
                                        <div>
                                            <div><img src={Rectangle1} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className="pr-0 pb-3">
                                        <div>
                                            <div><img src={Rectangle1} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className="pr-0 pb-3">
                                        <div>
                                            <div><img src={Rectangle1} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-3" data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Play Time</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle2} alt=".." className="img-fluid" /> </div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle3} alt=".." className="img-fluid" /> </div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle4} alt=".." className="img-fluid" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6  mb-3" data-aos="zoom-in-right" data-aos-duration="1200">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Home Tech</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle5} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle5} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle5} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6  mb-3" data-aos="zoom-in-left" data-aos-duration="1200">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Automobile</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle6} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle6} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle6} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6  mb-3" data-aos="zoom-in-right" data-aos-duration="1400">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Men collect</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle7} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle7} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle7} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6  mb-3" data-aos="zoom-in-left" data-aos-duration="1400">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Women</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle8} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle8} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle8} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-3" data-aos="zoom-in-right" data-aos-duration="1600">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Kids Collect</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle9} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle9} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle9} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6  mb-3" data-aos="zoom-in-left" data-aos-duration="1600">
                        <div className="card bg-white cardBrb px-3">
                            <h6 className="text-center my-3 line2 mainColor">Mobiles</h6>
                            <div>
                                <div className="cont4 text-center">
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle10} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle10} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                    <div className=" pb-3">
                                        <div>
                                            <div><img src={Rectangle10} alt=".." className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* ---------------------Classify--------------------------- */}

                {/* ---------------------New Arrival--------------------------- */}
                <h4 className="text-center mb-4 line1" data-aos="fade-down" data-aos-duration="1000">New Arrival</h4>

                <div className="grid-container">
                    <div className="pb-4" data-aos="zoom-in-right" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4" data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4" data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4" data-aos="zoom-in-left" data-aos-duration="1200">
                        <div className="card cardBrb shadow ">
                            <img src={img8} alt=".." className="img-fluid" />
                            <div className="pt-1 px-2 py-3">
                                <p className="FrtSize">N°02 BERGAMOT AND LEATHER SPRITZ EDP 10 ML / 0.34 OZ</p>
                                <span className="mainColor prodPrice font-weight-bold">200 EGP</span>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="FrtSize">zara official</span>
                                <div>
                                    <i className="fas fa-heart mainColor fa-lg"></i>
                                    <i className="fas fa-chart-bar  iconColor fa-lg mx-2"></i>
                                    <button href="#" className="BtnSty ml-5 btnHov">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-1 secMar">
                    <button href="#" className="BtnView rounded-pill btnHov">View More</button>
                </div>
                {/* ----------------------New Arrival--------------------------- */}

                {/* ---------------------Stocks--------------------------- */}
                <h4 className="text-center mb-4 line" data-aos="fade-down" data-aos-duration="1000">Stocks</h4>

                <div className="cont5 mb-4">
                    <div className="stock1">
                        <div className="card cardBrb">
                            <img src={stocks} alt=".." className="img-fluid" />
                            <div className="card-body p-3">
                                <h5 className="mainColor">Fabric Stock</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur Lorem
                                        ipsum dolor sit amet, conseteturLorem ipt,</p>
                                <div className="mb-2">
                                    <button href="#" className="BtnStock btnHov">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stock2 pb-1">
                        <div className="row pb-1">
                            <div className="col-md-5 p-0">
                                <div>
                                    <img src={stocks} alt=".." className="img-fluid cardBrb" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h5 className="mainColor">Fabric Stock</h5>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                                ipsum dolor sit amet, conseteturLorem ipt,</p>
                                <div>
                                    <button href="#" className="BtnStock ml-5 btnHov">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stock3 pb-1">
                        <div className="row pb-1">
                            <div className="col-md-5 p-0">
                                <div>
                                    <img src={stocks} alt=".." className="img-fluid cardBrb" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h5 className="mainColor">Fabric Stock</h5>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                                ipsum dolor sit amet, conseteturLorem ipt,</p>
                                <div>
                                    <button href="#" className="BtnStock ml-5 btnHov">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stock4 pb-1">
                        <div className="row pb-1">
                            <div className="col-md-5 p-0">
                                <div>
                                    <img src={stocks} alt=".." className="img-fluid cardBrb" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h5 className="mainColor">Fabric Stock</h5>
                                <p className="tradeFont">Lorem ipsum dolor sit amet, consetetur Lorem
                                                ipsum dolor sit amet, conseteturLorem ipt,</p>
                                <div>
                                    <button href="#" className="BtnStock ml-5 btnHov">View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------Stocks--------------------------- */}
            </div>
        </Fragment >
    )
}
export default Center;