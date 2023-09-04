import React from "react";

//Css Import
import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
// import '../assets/slick/slick-theme.css'
import '../assets/slick/slick.css'

//Images Import
import facebook from '../assets/images/facebooklogo.png'
import signup from '../assets/images/singup.png';
import logo from '../assets/images/logo.svg'
import twitter from '../assets/images/twitter.png'
import google from '../assets/images/Google.png'
import instagram from '../assets/images/Instagram.png'
import youtube from '../assets/images/youtube.png'
import map from '../assets/images/map.png'
import foundation from '../assets/images/foundation.png'
import gs from '../assets/images/foundation-course/gs.png'
import ga from '../assets/images/foundation-course/ga.png'
import agri from '../assets/images/foundation-course/agri.png'
import ab from '../assets/images/foundation-course/ab.png'
import cac from '../assets/images/foundation-course/cac.png'

export default function foundationCourse(){
    return(
        <>
        <div className="course-header foundation-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn" href="/courses">
                    <i className="icon-left-arrow-c" />
                    <div className="back-text">Courses</div>
                </a>
                </div>
                <div className="logo-wrap">
                <a href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="foundation-banner">
            <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-4">
                <img className="img-fluid" src={foundation} alt="" />
                </div>
                <div className="col-xl-8">
                <h2 className="banner-title">
                    <span className="word-1">FOUNDATION COURSE</span>{" "}
                    <span className="word-2">“NOURISHING ROOTS”</span>
                </h2>
                </div>
            </div>
            </div>
        </div>
        <div className="foundation-course">
            <div className="container-fluid">
            <div className="foundation-course-details">
                <div className="row justify-content-center">
                <div className="col-lg-6">
                    <a className="fc-list fc-list-1" href="general-studies.html">
                    <div className="fc-list-btn">
                        <img src={gs} alt="" />
                        <span>GENERAL STUDIES</span>
                    </div>
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="fc-list fc-list-2" href="general-aptitude.html">
                    <div className="fc-list-btn">
                        <img src={ga} alt="" />
                        <span>GENERAL APTITUDE</span>
                    </div>
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="fc-list fc-list-3" href="agriculture.html">
                    <div className="fc-list-btn">
                        <img src={agri} alt="" />
                        <span>AGRICULTURE</span>
                    </div>
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="fc-list fc-list-4" href="agri-business.html">
                    <div className="fc-list-btn">
                        <img src={ab} alt="" />
                        <span>AGRI BUSINESS</span>
                    </div>
                    </a>
                </div>
                <div className="col-lg-10">
                    <a className="fc-list fc-list-5" href="competetive-exam.html">
                    <div className="fc-list-btn">
                        <img src={cac} alt="" />
                        <span>COMPETITIVE EXAMINATIONS COVERED</span>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>

    )
}