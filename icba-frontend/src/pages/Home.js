import React from "react";
import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
import '../assets/slick/slick.css'
import logo from '../assets/images/logo.svg'

export default function Home(){

    return(
        <>
        <header className="header">
            <div className="container-fluid relative">
            <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand" href="/">
                <img className="logo" src={logo} alt="" />
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="icon-menu text-primary" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="text-right d-md-none">
                    <button type="button" className="close-btn" id="c_lose">
                    <i className="icon-close close-icon" />
                    </button>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Resources 
                        <i className="icon-down-arrow icon" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">
                        ICBA VIDEOS
                        </a>
                        <a className="dropdown-item" href="#">
                        CURRENT AFFAIRS
                        </a>
                        <a className="dropdown-item" href="/courses">
                        STUDY MATERIALS
                        </a>
                        <a className="dropdown-item" href="#">
                        GALLERY
                        </a>
                        <a className="dropdown-item" href="#">
                        BLOGS
                        </a>
                    </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        Contact
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-lg btn-light" href="/login">
                        <i className="icon-login" /> ICBA Member Login
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        </header>
        <div className="banner h-banner">
            <div className="overlay" />
            <div className="container">
            <div className="text-center">
                <h2 className="title">
                INSTITUTE OF CAREER &amp; BUSINESS AGRICULTURE
                </h2>
                <div className="title-bottom">
                “Mentoring New Generation of Agricultural Leadership”
                </div>
                <div className="text-center journey-btn-wrap">
                <a
                    className="btn btn-lg  btn-primary journey-btn"
                    href="/startJourney"
                >
                    Start Your Journey
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="start-journey d-none">
            <div className="container">
            <div className="text-center">
                <a className="btn btn-lg  btn-primary journey-btn" href="">
                Start Your Journey
                </a>
            </div>
            </div>
        </div>
        </>

    )
} 