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

export default function generalStudies(){
    return(
        <>
        <div className="course-header foundation-header cd-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn" href="foundation-course.html">
                    <i className="icon-left-arrow-c" />
                </a>
                </div>
                <div className="logo-wrap">
                <a href="index.html">
                    <img className="logo" src="images/logo.svg" alt="" />
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="cd-heading mx-auto">GENERAL STUDIES</div>
        <div className="banner gs-banner">
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        INDIAN POLITY
                    </a>
                    </div>
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        GEOGRAPHY
                    </a>
                    </div>
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        INDIAN ECONOMY
                    </a>
                    </div>
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        ENVIRONMENT
                    </a>
                    </div>
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        INDIAN HISTORY &amp; INDIAN NATIONAL MOVEMENT
                    </a>
                    </div>
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        SCIENCE &amp; TECHNOLOGY
                    </a>
                    </div>
                    <div className="col-lg-6">
                    <a className="course-details" href="">
                        GENERAL TAMIL
                    </a>
                    </div>
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        TAMILNADU HISTORY &amp; ADMINISTRATION
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>

    )
}