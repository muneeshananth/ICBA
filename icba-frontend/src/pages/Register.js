import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
// import '../assets/slick/slick-theme.css'
import '../assets/slick/slick.css'

import facebook from '../assets/images/facebooklogo.png'
import signup from '../assets/images/singup.png';
import logo from '../assets/images/logo.svg'
import twitter from '../assets/images/twitter.png'
import google from '../assets/images/Google.png'

import axios from 'axios'
import baseUrl from "../common/api";

export default function Register(){
    
    const navigate = useNavigate()

    const toastError = (message)=>{
        toast.error(`${message}`,{
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            transition:Zoom
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.length)
        let formData={}
        for(let i=0; i< e.target.length; i++){
            if(e.target[i].name.length > 2 )
                formData[e.target[i].name] = e.target[i].value
            }
        if(formData["password"]===formData["confirm-password"]){
            console.log(formData)
            axios.post(`${baseUrl}/register`,formData).then(res=>{
                if(!res){
                    return;
                }
                else{
                    console.log(res.data.data)
                    if(res?.data?.data!=="failed"){
                        navigate('/dashboard', {state:{data:res.data.data}})
                    }
                    else if(res?.data?.data=="failed"){
                        toastError("Try again later ")
                    }
                }
              
            })
        }
    }


    return(
        <>
        <div>
        <a class="back-btn" href="/login">
            <i class="icon-left-arrow"></i>
            <div class="back-text">Back</div>
        </a>
        </div>
        <div class="text-center signup-header">
            <a class="navbar-brand" href="/">
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
                        <ToastContainer />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <div className="form-group-prepend">
                                    <i className="icon-user form-group-text"></i>
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="form-control form-control-lg"
                                    name="username"
                                    placeholder="Enter your name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-4 px-1">
                                    <div className="form-group mb-3">
                                        <div className="form-group-prepend">
                                            <i className="icon-calendar form-group-text"></i>
                                        </div>
                                        <input
                                            type="date"
                                            className="form-control form-control-lg"
                                            name="dob"
                                            placeholder="Date of Birth"
                                            aria-label="Date of Birth"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-8 px-1">
                                    <div className="form-group mb-3">
                                        <div className="form-group-prepend">
                                            <i className="icon-email form-group-text"></i>
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="e-mail"
                                            placeholder="Enter your email Id"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-group-prepend">
                                    <i className="icon-lock form-group-text"></i>
                                </div>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="icba_id"
                                    placeholder="ICBA ID"
                                    aria-label="ICBA ID"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="form-group mb-3">
                            <div className="form-group-prepend">
                                <i className="fas fa-phone form-group-text"></i>
                            </div>
                                <input
                                    type="tel"
                                    required
                                    className="form-control form-control-lg"
                                    name="phone"
                                    placeholder="Enter your Mobile"
                                    aria-label="Mobile"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-group-prepend">
                                    <i className="icon-lock form-group-text"></i>
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="form-control form-control-lg"
                                    name="password"
                                    placeholder="Enter your Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <div className="form-group-prepend">
                                    <i className="icon-lock form-group-text"></i>
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="form-control form-control-lg"
                                    name="confirm-password"
                                    placeholder="Re-enter your Password"
                                    aria-label="Confirm Password"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div>
                                <input
                                    className="btn-block proceed-btn"
                                    required
                                    type="submit"
                                    value="Proceed"
                                />
                            </div>
                        </form>


                        <div class="bottom-btn">If you have account already? <a href="/login">Login</a></div>
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