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


export default function Admissions(){
    return(
        <>
        <div className="course-header foundation-header cd-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn" href="/startJourney">
                    <i className="icon-left-arrow-c" />
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
        <div className="cd-heading mx-auto">ADMISSIONS</div>
        <div className="banner gs-banner admission-banner">
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 ml-auto">
                <div className="row">
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        FOR ADMISSION
                    </a>
                    </div>
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        BROUCHER
                    </a>
                    </div>
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        FEES STRUCTURE
                    </a>
                    </div>
                    <div className="col-lg-12">
                    <a className="course-details" href="">
                        HOSTEL FACILITY
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