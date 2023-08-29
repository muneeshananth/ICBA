import React from "react";
import "../assets/css/global.css"
import "../assets/css/bs4_customise.css"
import '../assets/css/home.css'
import signin from '../assets/images/signin.png'
import logo from '../assets/images/logo.svg'

export default function Login() {

    return(
        <div class='register-page'>
        <div>
          <a className="back-btn" href="index.html">
            <i className="icon-left-arrow" />
            <div className="back-text">Back</div>
          </a>
        </div>
        <div className="text-center signup-header">
          <a className="navbar-brand" href="index.html">
            <img className="logo" src={logo} alt="" />
          </a>
          <h2>INSTITUTE OF CAREER &amp; BUSINESS AGRICULTURE</h2>
          <h4>“Mentoring New Generation of Agricultural Leadership”</h4>
        </div>
        <section className="signup">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 order-2 order-md-1">
                <div>
                  <img className="img-fluid" src={signin} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-1 order-md-2">
                <div className="signup-header">Login</div>
                <form action>
                  <div className="form-group mb-3">
                    <div className="form-group-prepend">
                      <i className="icon-user form-group-text" />
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter User Id or Mobile number" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group mb-3">
                    <div className="form-group-prepend">
                      <i className="icon-lock form-group-text" />
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div>
                    <input className="btn-block proceed-btn" type="submit" defaultValue="Proceed" />
                  </div>
                </form>
                <div className="bottom-btn">Don’t you have account? <a href="/register">Create New</a></div>
              </div>
            </div>
          </div>
        </section>
        <div className="reg-footer-links text-right">
          <div className="container-fluid">
            <div className="reg-footer-links-text">Connect with us</div>
            <div className="footer-social-links">
              <a href="mailto:icbachennai@gmail.com">
                <i className="icon-mail" />
              </a>
              <a href="https://wa.me/917550265264">
                <i className="icon-whatsapp" />
              </a>
              <a href="https://instagram.com/icba_chennai?igshid=MzRlODBiNWFlZA==">
                <i className="icon-instagram" />
              </a>
              <a href="https://twitter.com/ICBAchennai">
                <i className="icon-Twitter-X" />
              </a>
              <a className="mr-0" href="https://youtube.com/@ICBA-Chennai">
                <i className="icon-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
};
