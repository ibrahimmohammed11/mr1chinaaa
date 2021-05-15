import React, { Component, Fragment } from 'react';
import img1 from "../../images/1.png";
import Center from '../center/Center';
import Raside from '../Raside/Raside';
import { ReactComponent as Social } from "../../images/svg/social-media.svg";
import './laside.css';
export default class Laside extends Component {
    render() {
        return (
            <Fragment>

                <div className="contain">
                    <div className=" bg-white pt-2 lsideBord pb-5">
                        <div className="lSide">
                            <div className="lsideGrid1 mb-5">
                                <div className="pt-4 pb-1">
                                    <div className="mb-4 px-2">
                                        <img src={img1} alt=".." width="50px" height="55px" className="mr-2" />
                                        <h6 className="lFontRes d-inline font-weight-bold">Mr1 Taher</h6>
                                    </div>
                                    <div className="lsidecolor mb-4 px-3"><i className="fas fa-home fa-lg mr-3"></i> <span className="lFontRes">Home</span></div>
                                    <div className="lsidecolor mb-4 newsfeedPad"><Social className="lsIcon newsfeedMar" width="35.11px" height="30px" /> <span className="lFontRes">Newsfeeds</span></div>
                                    <div className="lsidecolor mb-4 px-3"><i className="fas fa-comments  fa-lg mr-3"></i> <span className="lFontRes">Messages</span></div>
                                    <div className="mColor mb-4 pl-3"><i className="fas fa-user-friends fa-lg mr-2 pr-1"></i> <span className="lFontRes">Friends Requests</span></div>
                                    <div className="lsidecolor mb-2 px-3"><i className="fas fa-bell  fa-lg mr-3 pl-1"></i> <span className="lFontRes">Notifications</span></div>
                                </div>
                                <hr className="bg-muted hrWidth m-auto" />
                                <div className=" mb-3 px-3 mt-3">
                                    <i className="fas fa-shopping-cart mColor fa-lg mr-3"></i>
                                    <span className="lFontRes font-weight-bold">Shopping</span>
                                    <i className="fas fa-chevron-down mColor shopMar"></i>
                                </div>
                                <hr className="bg-muted hrWidth m-auto" />
                                <div className=" mb-3 px-3 mt-3">
                                    <i className="fas fa-align-center mColor fa-lg mr-3 pl-1"></i>
                                    <span className="lFontRes font-weight-bold">Categories</span>
                                    <i className="fas fa-chevron-down mColor catMar"></i>
                                </div>
                                <hr className="bg-muted hrWidth m-auto" />
                                <div className=" mb-3 px-3 mt-3">
                                    <h6 className="text-center mColor">Tradetube Channel</h6>
                                </div>
                                <hr className="bg-muted hrWidth m-auto" />
                                <div className=" mb-3 px-3 mt-3">
                                    <h6 className="text-center font-weight-bold">Be A Vendor</h6>
                                </div>
                                <hr className="bg-muted hrWidth m-auto" />

                            </div>

                        </div>
                    </div>
                    <Center />
                    <Raside />
                </div>

            </Fragment>
        )
    }
}
