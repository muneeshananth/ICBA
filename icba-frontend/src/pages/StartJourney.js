import React from "react";

//Css Import
import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
// import '../assets/slick/slick-theme.css'
import '../assets/slick/slick.css'

//Images Import
import logo from '../assets/images/logo.svg'


export default function StartJourney(){

    return(
        <>
        <div className="course-header foundation-header">
            <div className="container-fluid">
            <div className="course-header-details">
                <div>
                <a className="back-btn" href="https://icba.in/">
                    <i className="icon-left-arrow-c" />
                    <div>START MY JOURNEY</div>
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
        <div className="container-fluid py-3">
            <ul className="smj-list">
            <li>
                <a className="smj-link smj-about-link" href="/about">
                ABOUT US <i className="icon-r-arrow smj-icon" />
                </a>
            </li>
            <li>
                <a className="smj-link smj-resources-link" href="/courses">
                COURSES <i className="icon-r-arrow smj-icon" />
                </a>
            </li>
            <li>
                <a className="smj-link smj-admission-link" href="/admissions">
                ADMISSIONS <i className="icon-r-arrow smj-icon" />
                </a>
            </li>
            <li>
                <a className="smj-link smj-faq-link" href="">
                FAQ’s <i className="icon-r-arrow smj-icon" />
                </a>
            </li>
            <li>
                <a className="smj-link smj-testi-link" href="">
                What Our Students Say About ICBA?{" "}
                <i className="icon-r-arrow smj-icon" />
                </a>
            </li>
            </ul>
        </div>
        </>


    )
}