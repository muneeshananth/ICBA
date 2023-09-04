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


export default function About(){
    return(
        <>
        <div className="course-header foundation-header cd-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn back--btn" href="/startJourney">
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
        <div className="cd-heading cd--heading mx-auto">About Us</div>
        <div className="banner gs-banner about-banner">
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-6 ml-auto">
                <h2 className="about-title">WHO ARE WE?</h2>
                <p className="about-content">
                    ICBA Mentoring New Generation Agriculture leadership. Exculsively
                    focusing on Agri Graduates career path. ICBA has evolved over the
                    years and nutured hundereds of successful achievers from
                    Agricultural and other Academics Backgrounds.
                </p>
                </div>
            </div>
            </div>
        </div>
        </>


    )
}