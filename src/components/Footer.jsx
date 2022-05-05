import react from 'react';
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyle";
import {FaAddressBook, FaBeer, FaHome, FaKiwiBird, FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaChild} from "react-icons/fa";
import {FaMap} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaLine} from "react-icons/fa";


function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <>
    <footer id="main-footer" className="pt-2 container-fluid">
        <div className=" footer-container ">
            <div className='container'>
                <h2 className='logos'>
                    <FaChild className='logo'/>Health Me<a href="#"></a></h2>
                <div className="social">
                    <ul>

                            <a href="https://www.facebook.com/physicalandmentalhealthgrow" className="f-facebook gap" target="_blank"><i
                                className=""
                                aria-hidden="true"> <FaFacebook className='fa-facebook' style={{fontSize: '40px'}}/></i></a>

                            <a href="https://www.instagram.com/warunee2465/" className="i-instagram gap" target="_blank"><i
                                className=""
                                aria-hidden="true"><FaInstagram className='fa-instagram' style={{fontSize: '40px'}} /></i></a>



                            <a href="https://www.linkedin.com/in/chonthichar-soythong-3842b31a3/" className="l-linkedin gap"
                               target="_blank"><i className=""
                                                  aria-hidden="true"> <FaLinkedin className='fa-linkedin' style={{fontSize: '40px'}}/></i></a>

                         <a href="https://www.linkedin.com/in/chonthichar-soythong-3842b31a3/" className="l-linkedin gap"
                               target="_blank"><i className=""
                                                  aria-hidden="true"> <FaTwitter className='fa-linkedin' style={{fontSize: '40px'}}/></i></a>
                    </ul>
                </div>
            </div>
            <div>
                <h5>Email Newsletter</h5>
                <p>Please contact us for more details</p>
                <form name="contact" method="POST" data-netlify="true">
                    <input type="email" name="email" placeholder="Enter Emails" />
                    <input type="submit" value="Subscribe" className="btn btn-primary" />
                </form>
            </div>
            {/*<div>*/}
            {/*    <h5>Site Links</h5>*/}
            {/*    <ul className="list">*/}
            {/*        <li><a href="#">Help and Support</a></li>*/}
            {/*        <li><a href="#">Privacy Support</a></li>*/}
            {/*        <li><a href="#">About us</a></li>*/}
            {/*        <li><a href="#">Contact</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div>
                <h5>Member Guide</h5>
                <p>Apply to be a members for free tips and monthly health care guide</p>
                <a href="#" className="btn btn-secondary">Join Us For Free</a>
            </div>
            <div className="copy">
                    Copyright &copy;2021, All Right Reserved
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer