import react from 'react';
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyle";
import {FaAddressBook, FaBeer, FaHome, FaKiwiBird} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaMap} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaLine} from "react-icons/fa";


function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0A142F" fill-opacity="1"
                      d="M0,288L48,277.3C96,267,192,245,288,245.3C384,245,480,267,576,240C672,213,768,139,864,138.7C960,139,1056,213,1152,213.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

            <div className='footer'>
                <div className='footer-box'>

                            <div className='copys'>
                                <p className='copy'><FaHome className='phone'/> Hua Hin Thailand 77110</p>
                                <p className='copy'><FaPhone className='phone'/>+66 871651655</p>
                                <p className='copy'>chonthichar.soythong@gmail.com</p>
                                <p className='copy'><FaLine className='phone'/>0871651655</p>
                            </div>

                    <div className='boxes'>
                        <div className='row'>

                            <div className='copy-right'>
                                <p className='copy-rights'>Copyright &copy; {footerYear} All rights
                                    reserved</p>
                            </div>

                            <div className='col '>
                                <ul className='social-icons-footer'>
                                    <li><a href="#" className='facebook'><FaFacebook className='icos'/></a></li>
                                    <li><a href="#" className='instagram'><FaInstagram className='icos'/></a></li>
                                    <li><a href="#" className='linkined'><FaLinkedin className='icos'/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Footer