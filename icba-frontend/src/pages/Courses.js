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


export default function Courses(){
    return(
        <>
        <div className="course-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn" href="/startJourney">
                    <i className="icon-left-arrow-c" />
                    <div className="back-text">Back</div>
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
        <div className="banner course-banner">
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-5">
                <div className="text-center banner-content">
                    <div>
                    <a
                        className="course-list course-list-1"
                        href="foundation-course.html"
                    >
                        <h2>FOUNDATION COURSE</h2>
                        <h4>“NOURISHING ROOTS”</h4>
                    </a>
                    </div>
                    <div>
                    <a className="course-list" href="">
                        <h2>AGRICULTURE OPTIONAL</h2>
                        <h4 className="course-desig">
                        (For UPSC Civil Services &amp; IFoS, TNPSC - ACF)
                        </h4>
                    </a>
                    </div>
                    <div>
                    <a className="course-list course-list-3 mb-0" href="">
                        <h2>AGRIPRENEURSHIP</h2>
                        <h4>WORKSHOP</h4>
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