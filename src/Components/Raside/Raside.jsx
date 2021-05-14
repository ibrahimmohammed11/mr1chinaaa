import React, { Component, Fragment } from 'react';
import './Raside.css';
import img8 from "../../images/Rectangle.png";
import accessories from "../../images/accessories.jpg";
import artur from "../../images/artur.png";
import Ellipse from "../../images/Ellipse.png";
import Ellipse1 from "../../images/Ellipse1.png";
import rest from "../../images/event.png";
import face1 from "../../images/face1.png";
import face2 from "../../images/face2.png";
import face3 from "../../images/face3.png";

export default class Raside extends Component {
    render() {
        return (
            <Fragment>
                <div className="rSide">
                    {/*------------------------ Sponsored--------------------- */}
                    <h4 className="marTop line3 mainColor mb-3">Sponsored</h4>

                    <div className="sponsored">
                        <div className=" pb-4">
                            <img src={accessories} alt=".." className="imgBrb" width="150px" height="150px" />
                        </div>
                        <div className="pb-4">
                            <div>
                                <i className="fas fa-ellipsis-h dotMar secColor"></i>
                            </div>
                            <h5 className=" mt-4">Sale up to 50 %</h5>
                            <a href="https://www.zara.com/" target="-blank" className="linkZ">www.zara.com</a>
                        </div>
                        <div className=" pb-4">
                            <img src={img8} alt=".." className="imgBrb" width="150px" height="150px" />
                        </div>
                        <div className="pb-4">
                            <div>
                                <i className="fas fa-ellipsis-h dotMar secColor"></i>
                            </div>
                            <h5 className=" mt-4">Sale up to 50 %</h5>
                            <a href="https://www.zara.com/" target="-blank" className="linkZ">www.zara.com</a>
                        </div>
                    </div>
                    <div className="col-md-12 text-center my-1">
                        <div>
                            <button href="#" className="BtnSee btnHov">See More</button>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <div>
                            <hr className="bg-muted " />
                        </div>
                    </div>
                    {/*------------------------ Sponsored--------------------- */}


                    {/*------------------------ Subscribed--------------------- */}

                    <h4 className="my-3 line3 mainColor">Subscribed</h4>

                    <div className="subscribed">
                        <div className="pb-4">
                            <div>
                                <img src={artur} alt=".." width="80px" height="82px" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="subMar">Fanosy Fansony</h6>
                            </div>
                        </div>


                        <div>
                            <div>
                                <img src={artur} alt=".." width="80px" height="82px" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="subMar">Fanosy Fansony</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 m-auto">
                        <div>
                            <hr className="bg-muted " />
                        </div>
                    </div>

                    {/*------------------------ Subscribed--------------------- */}


                    {/*------------------------ Friend Requests--------------------- */}

                    <h4 className="my-3 line4 mainColor">Friend Requests</h4>

                    <div className="subscribed">
                        <div className=" pb-4">
                            <div>
                                <img src={Ellipse1} alt=".." width="80px" height="82px" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span><span className="mainColor font-weight-bold">Kate smith</span> <span className="FrtSize ml-5"> 8 mins ago</span></span>

                                <span className="FrtSize d-block">13 mutual friends</span>
                                <span className="FrSize d-block">Sent You A Friend Request</span>
                                <button className="rounded-pill Btn1Size mr-5 my-3 FrtSize">Decline</button>
                                <button className="rounded-pill Btn2Size my-3 FrtSize">Approve</button>
                            </div>
                        </div>
                        <div className="pb-4">
                            <div>
                                <img src={Ellipse1} alt=".." width="80px" height="82px" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span><span className="mainColor font-weight-bold">Kate smith</span> <span className="FrtSize ml-5"> 8 mins ago</span></span>

                                <span className="FrtSize d-block">13 mutual friends</span>
                                <span className="FrSize d-block">Sent You A Friend Request</span>
                                <button className="rounded-pill Btn1Size mr-5 my-3 FrtSize">Decline</button>
                                <button className="rounded-pill Btn2Size my-3 FrtSize">Approve</button>
                            </div>
                        </div>
                        <div className=" pb-4">
                            <div>
                                <img src={Ellipse1} alt=".." width="80px" height="82px" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <span><span className="mainColor font-weight-bold">Kate smith</span> <span className="FrtSize ml-5"> 8 mins ago</span></span>

                                <span className="FrtSize d-block">13 mutual friends</span>
                                <span className="FrSize d-block">Sent You A Friend Request</span>
                                <button className="rounded-pill Btn1Size mr-5 my-3 FrtSize">Decline</button>
                                <button className="rounded-pill Btn2Size my-3 FrtSize">Approve</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 text-center my-1">
                        <div>
                            <button href="#" className="BtnSee btnHov">See More</button>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <div>
                            <hr className="bg-muted " />
                        </div>
                    </div>

                    {/*------------------------ Friend Requests--------------------- */}


                    {/*------------------------ Upcoming Events--------------------- */}

                    <h4 className="my-3 line4 mainColor">Upcoming Events</h4>
                    <div className="event">
                        <div className="bg-white mr-5 eventBrb mb-2">
                            <img src={rest} alt=".." className="w-100" />
                            <div className="p-2">
                                <span className="FrSize mainColor font-weight-bold">Join China Now<span className="float-right FrtSize"> Feb 18</span></span>
                                <p className="eventSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br /> sed
                                diam nonumy eirmod tempor invidunt ut labore et<br /> dolore
                                    magna aliquyam erat, sed diam voluptua.</p>
                                <ul className="list-unstyled ulFace">
                                    <li className="d-inline"><img src={face1} alt=".." className="face1" /></li>
                                    <li className="d-inline"><img src={face2} alt=".." className="face2" /></li>
                                    <li className="d-inline"><img src={face3} alt=".." className="face3" /></li>
                                    <li className="d-inline"><img src={face1} alt=".." className="face4" /></li>
                                    <li className="d-inline"><i className="fas fa-plus-circle fa-2x face5"></i></li>
                                    <span className="vendor mt-2">11 Other Vendors are interested</span>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button href="#" className="BtnEvent btnHov mb-3 mt-5">Read More</button>
                            </div>
                        </div>
                        <div className="bg-white mr-5 eventBrb mb-2">
                            <img src={rest} alt=".." className="w-100" />
                            <div className="p-2">
                                <span className="FrSize mainColor font-weight-bold">Join China Now<span className="float-right FrtSize"> Feb 18</span></span>
                                <p className="eventSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br /> sed
                                diam nonumy eirmod tempor invidunt ut labore et<br /> dolore
                                    magna aliquyam erat, sed diam voluptua.</p>
                                <ul className="list-unstyled ulFace">
                                    <li className="d-inline"><img src={face1} alt=".." className="face1" /></li>
                                    <li className="d-inline"><img src={face2} alt=".." className="face2" /></li>
                                    <li className="d-inline"><img src={face3} alt=".." className="face3" /></li>
                                    <li className="d-inline"><img src={face1} alt=".." className="face4" /></li>
                                    <li className="d-inline"><i className="fas fa-plus-circle fa-2x face5"></i></li>
                                    <span className="vendor mt-2">11 Other Vendors are interested</span>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button href="#" className="BtnEvent btnHov mb-3 mt-5">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <div>
                            <hr className="bg-muted " />
                        </div>
                    </div>
                    {/*------------------------ Upcoming Events--------------------- */}


                    {/*------------------------ People You May know--------------------- */}

                    <h4 className="my-3 line5 mainColor">People You May know</h4>

                    <div className="people">
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <img src={Ellipse} alt=".." className="img-fluid rounded-circle" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mt-4">Sam Smith John</h6>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-circle dotColor fa-xs mt-4"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 m-auto">
                        <div>
                            <hr className="bg-muted " />
                        </div>
                    </div>
                    {/*------------------------ People You May know--------------------- */}

                    {/*------------------------ News--------------------- */}
                    <h4 className="my-3 line6 mainColor">News</h4>
                    <div className="news">


                        <div className="mb-4 newsMar">
                            <div className="bg-white p-2 rounded-lg shadow ">
                                <p className="newsFSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className="mb-4 newsMar">
                            <div className="bg-white p-2 rounded-lg shadow ">
                                <p className="newsFSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className="mb-4 newsMar">
                            <div className="bg-white p-2 rounded-lg shadow ">
                                <p className="newsFSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className="mb-4 newsMar">
                            <div className="bg-white p-2 rounded-lg shadow ">
                                <p className="newsFSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className="mb-4 newsMar">
                            <div className="bg-white p-2 rounded-lg shadow ">
                                <p className="newsFSize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero
                                eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                    </div>
                    {/*------------------------ News--------------------- */}

                </div>
            </Fragment>
        )
    }
}
