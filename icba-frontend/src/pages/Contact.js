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

export default function Contact(){
    
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
                        Resources <i className="icon-down-arrow icon" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">
                        ICBA VIDEOS
                        </a>
                        <a className="dropdown-item" href="#">
                        CURRENT AFFAIRS
                        </a>
                        <a className="dropdown-item" href="courses.html">
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
        <div className="banner contact-banner">
            <div className="overlay" />
            <div className="container pb-5">
            <div className="row align-items-end">
                <div className="col-lg-6">
                <div className="social-links-wrap">
                    <a
                    className="social-links"
                    href="https://instagram.com/icba_chennai?igshid=MzRlODBiNWFlZA=="
                    >
                    <img src={instagram} alt="" />
                    </a>
                    <a className="social-links" href="https://twitter.com/ICBAchennai">
                    <img src={twitter} alt="" />
                    </a>
                    <a
                    className="social-links"
                    href="https://youtube.com/@ICBA-Chennai"
                    >
                    <img src={youtube} alt="" />
                    </a>
                    <div className="join-text">Join With Us</div>
                </div>
                <div>
                    <div className="address-header">
                    <i className="icon-location" />
                    <div className="address-text">Address</div>
                    </div>
                </div>
                <div className="map-wrap">
                    <a
                    href="https://goo.gl/maps/DMg3tGhjTFBFFnZMA"
                    className="map-img-wrap"
                    >
                    <img className="map-img" src={map} alt="" />
                    </a>
                    <div className="map-address">
                    AC 38, 4th Street, AC Block, Next to Shri Krishnaswamy College,
                    Anna Nagar, Chennai - 600040.
                    </div>
                </div>
                </div>
                <div className="col-lg-4 ml-auto">
                <div className="text-md-right">
                    <div>
                    <div className="address-header">
                        <i className="icon-users" />
                        <div className="address-text">Contact</div>
                    </div>
                    </div>
                    <a href="tel:+917200072005" className="contact-number">
                    <i className="icon-call" />
                    <div className="contact-number-text">72000 72005</div>
                    </a>
                    <a href="https://wa.me/917550265264" className="contact-number">
                    <i className="icon-whatsapp" />
                    <div className="contact-number-text">75502 65264</div>
                    </a>
                    <a href="mailto:icbachennai@gmail.com" className="contact-number">
                    <i className="icon-mail" />
                    <div className="contact-number-text">icbachennai@gmail.com</div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>

    )
}