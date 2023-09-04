import React from "react";

//Css Import
import '../assets/css/bs4_customise.css'
import '../assets/css/global.css'
import '../assets/css/home.css'
import '../assets/fonts/style.css'
// import '../assets/slick/slick-theme.css'
import '../assets/slick/slick.css'
// import '../assets/css/sb-admin-2.css'
import '../assets/css/dashboard.css'
import '../assets/fonts/style.css'
// import '../assets/vendor/simple-calender.css'
// import '../assets/vendor/fontawesome-free/all.min.css'

//Images Import
import facebook from '../assets/images/facebooklogo.png'
import signup from '../assets/images/singup.png';
import logo from '../assets/images/logo.svg'
import twitter from '../assets/images/twitter.png'
import google from '../assets/images/Google.png'
import instagram from '../assets/images/Instagram.png'
import youtube from '../assets/images/youtube.png'
import map from '../assets/images/map.png'
import avatar from '../assets/images/profile/undraw_profile.svg'
import profile from '../assets/images/profile/profile.png'

export default function Dashboard(){
    return(
        <>
        {/* Page Wrapper */}
        <div id="wrapper">
            {/* Sidebar */}
            <ul
            className="navbar-nav sidebar sidebar-dark accordion pt-5"
            id="accordionSidebar"
            >
            {/* Divider */}
            <hr className="sidebar-divider mb-5" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area" />
                <span>Attendance</span>
                </a>
            </li>
            {/* Heading */}
            {/* Nav Item - Pages Collapse Menu */}
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area" />
                <span>Test Report</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area" />
                <span>Analytical Progress</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area" />
                <span>Study Material</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area" />
                <span>ICBA Daily</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw" />
                <span>Logout</span>
                </a>
            </li>
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light  topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                >
                    <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <div>
                    <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="/"
                    >
                    <img src={logo} alt="" />
                    </a>
                </div>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                    <a
                        className="nav-link dropdown-toggle h-profile-nav"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="mr-2 d-none d-lg-inline  h-student-name">
                        KISHORE MUTHU M
                        </span>
                        <img
                        className="img-profile rounded-circle"
                        src={avatar}
                        />
                    </a>
                    {/* Dropdown - User Information */}
                    <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />{" "}
                        Profile
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />{" "}
                        Settings
                        </a>
                        <div className="dropdown-divider" />
                        <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                        >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />{" "}
                        Logout
                        </a>
                    </div>
                    </li>
                </ul>
                </nav>
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                    <div className="dash-card mb-2">
                        <div className="row align-items-center">
                        <div className="col-lg-4">
                            <img
                            className="profile-pic img-fluid"
                            src={profile}
                            alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <h2>KISHORE MUTHU M</h2>
                            <h4>ID: ICBANR23001</h4>
                            <h4>Email id: abc@gmail.com</h4>
                            <h4>Mob No: 9874524589</h4>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="dash-card dash-card-student mb-1 mb-md-0">
                            <h6 className="dash-card-heading">Courses</h6>
                            <h3 className="dash-card-name">Nourishing Roots</h3>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="dash-card dash-card-student mb-1 mb-md-0">
                            <h6 className="dash-card-heading">Attendance</h6>
                            <h3 className="dash-card-name">75%</h3>
                            <a className="btn btn-outline-primary" href="">
                            View
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="dash-card dash-card-student mb-1 mb-md-0">
                            <h6 className="dash-card-heading">Overall Progress</h6>
                            <h3 className="dash-card-name">80%</h3>
                            <a className="btn btn-outline-primary" href="">
                            View
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="dash-card dash-card-student">
                        <div className="card flex-fill comman-shadow">
                        <div className="card-body">
                            <div id="calendar-doctor" className="calendar-container">
                            <div className="calendar">
                                <header>
                                <h2 className="month">
                                    july
                                    <div className="year">2023</div>
                                </h2>
                                <a
                                    className="simple-calendar-btn btn-prev"
                                    href="#"
                                />
                                <a
                                    className="simple-calendar-btn btn-next"
                                    href="#"
                                />
                                </header>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <div
                                className="event-container"
                                style={{ display: "none" }}
                                >
                                <div className="close" />
                                <div className="event-wrapper" />
                                </div>
                                <table>
                                <thead>
                                    <tr>
                                    <td>sun</td>
                                    <td>mon</td>
                                    <td>tue</td>
                                    <td>wed</td>
                                    <td>thu</td>
                                    <td>fri</td>
                                    <td>sat</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-24T18:30:00.000Z"
                                        >
                                        25
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-26T06:30:00.000Z"
                                        >
                                        26
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-27T06:30:00.000Z"
                                        >
                                        27
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-28T06:30:00.000Z"
                                        >
                                        28
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-29T06:30:00.000Z"
                                        >
                                        29
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-06-30T06:30:00.000Z"
                                        >
                                        30
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-01T06:30:00.000Z"
                                        >
                                        1
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-02T06:30:00.000Z"
                                        >
                                        2
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-03T06:30:00.000Z"
                                        >
                                        3
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-04T06:30:00.000Z"
                                        >
                                        4
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-05T06:30:00.000Z"
                                        >
                                        5
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-06T06:30:00.000Z"
                                        >
                                        6
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-07T06:30:00.000Z"
                                        >
                                        7
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-08T06:30:00.000Z"
                                        >
                                        8
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-09T06:30:00.000Z"
                                        >
                                        9
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-10T06:30:00.000Z"
                                        >
                                        10
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-11T06:30:00.000Z"
                                        >
                                        11
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-12T06:30:00.000Z"
                                        >
                                        12
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-13T06:30:00.000Z"
                                        >
                                        13
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-14T06:30:00.000Z"
                                        >
                                        14
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-15T06:30:00.000Z"
                                        >
                                        15
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-16T06:30:00.000Z"
                                        >
                                        16
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-17T06:30:00.000Z"
                                        >
                                        17
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-18T06:30:00.000Z"
                                        >
                                        18
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-19T06:30:00.000Z"
                                        >
                                        19
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-20T06:30:00.000Z"
                                        >
                                        20
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-21T06:30:00.000Z"
                                        >
                                        21
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-22T06:30:00.000Z"
                                        >
                                        22
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-23T06:30:00.000Z"
                                        >
                                        23
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-24T06:30:00.000Z"
                                        >
                                        24
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-25T06:30:00.000Z"
                                        >
                                        25
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-26T06:30:00.000Z"
                                        >
                                        26
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-27T06:30:00.000Z"
                                        >
                                        27
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-28T06:30:00.000Z"
                                        >
                                        28
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-29T06:30:00.000Z"
                                        >
                                        29
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-30T06:30:00.000Z"
                                        >
                                        30
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day disabled"
                                        data-date="2023-07-31T06:30:00.000Z"
                                        >
                                        31
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-08-01T06:30:00.000Z"
                                        >
                                        1
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-08-02T06:30:00.000Z"
                                        >
                                        2
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-08-03T06:30:00.000Z"
                                        >
                                        3
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-08-04T06:30:00.000Z"
                                        >
                                        4
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                        className="day wrong-month disabled"
                                        data-date="2023-08-05T06:30:00.000Z"
                                        >
                                        5
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="mt-2"></div>
            </div>
            {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
        {/* End of Page Wrapper */}
        </>

    )
}