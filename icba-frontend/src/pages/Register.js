import React from "react";

import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
import '../assets/slick/slick-theme.css'
import '../assets/slick/slick.css'

import facebook from '../assets/images/facebooklogo.png'
import signup from '../assets/images/singup.png';
import logo from '../assets/images/logo.svg'
import twitter from '../assets/images/twitter.png'
import google from '../assets/images/Google.png'

export default function Register(){

    return(
        <>
        <div>
        <a class="back-btn" href="index.html">
            <i class="icon-left-arrow"></i>
            <div class="back-text">Back</div>
        </a>
        </div>
        <div class="text-center signup-header">
            <a class="navbar-brand" href="index.html">
                <img class="logo" src={logo} alt=""/>
            </a>
            <h2>INSTITUTE OF CAREER & BUSINESS AGRICULTURE</h2>
            <h4>“Mentoring New Generation of Agricultural Leadership”</h4>
        </div>
        <section class="signup">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="signup-header">Sign up</div>
                        <form action="">
                            <div class="form-group mb-3">
                                <div class="form-group-prepend">
                                    <i class="icon-user form-group-text"></i>
                                </div>
                                <input type="text" class="form-control form-control-lg" placeholder="Enter your  name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="row">
                                <div class="col-lg-4 px-1">
                                    <div class="form-group mb-3">
                                        <div class="form-group-prepend">
                                            <i class="icon-calendar form-group-text"></i>
                                        </div>
                                        <input type="text" class="form-control form-control-lg" placeholder="Date of Birth" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div class="col-lg-8 px-1">
                                    <div class="form-group mb-3">
                                        <div class="form-group-prepend">
                                            <i class="icon-email form-group-text"></i>
                                        </div>
                                        <input type="text" class="form-control form-control-lg" placeholder="Enter your email Id" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="form-group-prepend">
                                    <i class="icon-lock form-group-text"></i>
                                </div>
                                <input type="text" class="form-control form-control-lg" placeholder="Enter your Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="form-group mb-3">
                                <div class="form-group-prepend">
                                    <i class="icon-lock form-group-text"></i>
                                </div>
                                <input type="text" class="form-control form-control-lg" placeholder="Re-enter your Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div>
                                <input class="btn-block proceed-btn" type="submit" value="Proceed" />
                            </div>
                        </form>
                        <div class="bottom-btn">If you have account already? <a href="login.html">Login</a></div>
                        <div class="signup-with-wrap">
                            <div class="signup-with">Signup With</div>
                            <div>
                                <a href="">
                                    <img src={facebook} alt=""/>
                                </a>
                                <a href="">
                                    <img src={twitter} alt=""/>
                                </a>
                                <a href="" class="mr-0">
                                    <img src={google} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <img class="img-fluid" src={signup} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="reg-footer-links">
            <div class="container-fluid">
                <div class="reg-footer-links-text">Connect with us</div>
                <div class="footer-social-links">
                    <a href="mailto:icbachennai@gmail.com">
                        <i class="icon-mail"></i>
                    </a>
                    <a href="https://wa.me/917550265264">
                        <i class="icon-whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/icba_chennai?igshid=MzRlODBiNWFlZA==">
                        <i class="icon-instagram"></i>
                    </a>
                    <a href="https://twitter.com/ICBAchennai">
                        <i class="icon-Twitter-X"></i>
                    </a>
                    <a class="mr-0" href="https://youtube.com/@ICBA-Chennai">
                        <i class="icon-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}