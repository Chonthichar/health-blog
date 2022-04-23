import {Link} from 'react-router-dom'
import travelImages from '../asset/travel_1.jpg'
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import ScrollButton from "./ScrollButton";
import Home_screen from "../asset/Home_screen.svg"
import {FaSchool} from "react-icons/fa";
import Ph_1 from "../asset/Ph_1.svg"
import Health from "../asset/health-care.png"
import E_learning from "../asset/e-learning.png"
import {FaPen} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import React, {useEffect, useRef, useState} from "react";
import {TweenLite, Power3} from "gsap";
import {gsap} from "gsap";
import Frame from "../asset/Frame 5.png"
import Pho from "../asset/Frame 14.png"
import Spa from "../asset/background2.jpg"
import Rectangle from "../asset/Rectangle 19.jpg"
import Group from "../asset/Vector 16.jpg"
import {FaPeopleCarry} from "react-icons/fa";
import {FaBusinessTime} from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import Pink from "../asset/Vector 1.jpg"
import Blue from "../asset/bluebackground.jpg"
import BonBloy from "../asset/bonbon-boy-thinking-about-the-question.jpg"
import Com from "../asset/Image Container.jpg"
import Iphone from "../asset/iphone.jpg"
import Google from "../asset/google.jpg"
import Spot from "../asset/spotGroup.jpg"
import Line from "../asset/Group 8441.png"
import Profile from "../asset/profile_ploy.jpg"

//section 6 testimonials said



function VideoBg() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='home-container container'>
                  {/*<img src={Profile} alt="spot-group" className='profile'/>*/}
                <img src={Spot} alt="spot-group" className='spot-1'/>
                <img src={Spot} alt="spot-group" className='spot-2'/>

                <div className='box-1'></div>
                <div className='box-2'></div>
                <div className='box-3'></div>
                  <img src={Profile} alt="spot-group" className='profile' id='profile'/>


                {/*<img src={Pink} alt="backgroundpink" className='dec-3'/>*/}
                {/*<img src={Pho} alt="photo_2" className='dec-1'/>*/}
                {/*<img src={Pho} alt="photo_2" className='dec-2'/>*/}
                <div className='top-box-1'>#1 Health care</div>
                <h1>Choose The Best
                    <br/>Version of You.</h1>
                <p>Eat healthy, Stay Healthy.</p>
                <div className='home-button'>
                    <Button className='button'>
                        Services
                    </Button>
                </div>
                {/* dot*/}
            </div>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-back'>*/}
            {/*    <path fill="#FFC97D" fill-opacity="0.1"*/}
            {/*          d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,133.3C672,117,768,107,864,90.7C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>*/}
            {/*</svg>*/}

            {/*section 2 who we are*/}
            <div className='background-section2'>
                {/*<img src={Frame} alt="photo" className='svg-imgs'/>*/}
                {/*<div className='blog'>*/}
                {/*< ScrollButton/>*/}
                <h1>Why choose use <br/> for your healthy food</h1>
                {/*<div className='underline'></div>*/}
                <p className='content-sec2'>We are a team for a web development and Web designer base in Thailand and
                    work for worldwide.
                    We provide a new high quality website and improve existing websites for both individuals, small
                    businesses and organization.
                    We are basically focusing on user-friendly website responsive design and high modern UI and UX
                    styling
                    that are easy to use by your clients.
                    <br/>
                    {/*<br/> <strong>Contact us for more Details</strong>*/}
                    <br/>
                    <br/> <a onClick={() => navigate('/contact')} className='contact'>FREE! consultation</a></p>
                {/*</div>*/}
            </div>


            {/*background section 3*/}
            <div className='background-section3  flex-columns container'>
                <div className='row'>
                    <div className='column'>
                        <div className='column-1'>
                            <video width='100%' height='800px' controls='controls' className='video'>
                                <source src='../asset/video.mp4'/>
                            </video>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='column-2'>
                            <h4>What are you looking for?</h4>
                            <h2>We also provide the best tips for your workout routine. </h2>

                            <p>We believe that exercise help to gain more energy and fresh your brain.
                                You already know that exercise is good for your body
                                But did you know that it can also boost your brains and thought.More over to improve you
                                beauty sleep,And also help you to get through depression and anxiety.
                                Read through more about the mental health benefits of exercise.</p>
                            <a href="#" className='contacts'>
                                <i className='fas fa-leaf'></i>
                                Read More
                            </a>

                        </div>
                    </div>
                </div>
            </div>


            {/*section 5 what we can do for you*/}

            <section className='background-section5'>
                <div className='box container-sm'>
                    <h2 className='head-text'>What we can do for you?</h2>
                    {/*<div className='underline'></div>*/}
                    <p className='text-component'>Check Out What fit for your bussiness.</p>


                    <div className='process'>
                        <div className='process-1'>
                            {/*<FaPeopleCarry className='process-icon'/>*/}
                            <div className='box-4'></div>
                            <div className='box-5'></div>
                            <FaPeopleCarry className='process-icon'/>

                            <h3>Web Design</h3>
                            <p>Help your website stand out with beautiful website design With focus on small components,
                                layout,
                                graphics, colors, fonts, structure, content, fit for your business,
                                ecommerce, online portfolios, and more..</p>
                        </div>

                        <div className='process-2'>
                            <FaComment className='process-icon'/>
                            <h3>Restyling Your site</h3>
                            <p>We offer the good deal for restyling your site, Landing Page and E-commerce to customize
                                the content up to date. Implement your website in reusable way.</p>
                        </div>


                        <div className='process-3'>
                            <FaHeart className='process-icon'/>
                            <h3>Modern styling UI and UX style</h3>
                            <p>Take advantage of the latest modern technologies to build amazing web experiences for
                                your clients, included design, web publishing, wen maintenance.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* section 4 BMI*/}
            <section id='bmi' className=' flex-columns background-section4 container'>
                <div className='row'>
                    <div className='column'>
                        <div className='column-1'>
                            <div className='table-text'>
                                <h3>BMI Calculation</h3>
                                <p>Your BMR calculator generates the number of calories your body burns per day at rest.
                                    Your BMR with activity factor is the number of calories your
                                    body burns per day based on the activity factor you selected</p>
                            </div>
                            <table className='table-details'>
                                <thead>
                                <tr>
                                    <th className='text-tab'>BMI</th>
                                    <th className='text-tab'>Weight Status</th>
                                </tr>
                                </thead>
                                <tbody className='style'>
                                <tr>
                                    <td>Below 18.5</td>
                                    <td>Under weight</td>
                                </tr>
                                <tr>
                                    <td>18.5-24.5</td>
                                    <td>Healthy</td>
                                </tr>
                                <tr>
                                    <td>25.0-29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td>30.0 and Above</td>
                                    <td>Obese</td>
                                </tr>
                                </tbody>
                            </table>
                            <blockquote>*BMI BODY Mass Index</blockquote>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='column-2'>
                            <h3>BMI calculation weight</h3>
                            <p>Your BMI calculation weight is general base on the your body muscel. Please fill in your
                                information
                                here for more results.</p>
                            <form action="" className='call'>
                                <div className='form-control-height'>
                                    <label htmlFor="height"></label>
                                    <input type="text" name="name" id="height" className='height form-input-height'
                                           placeholder='Place your height here'/>
                                </div>

                                <div className='form-control--weight'>
                                    <label htmlFor="weight"></label>
                                    <input type="text" name="name" id="height" className="weight form-input-weight"
                                           placeholder='Place your weight here'/>
                                </div>
                                <input type="submit" onClick="bmi()" value="calculate" id="submitting"
                                       className='btn-c'/>
                            </form>

                            <p id='result' className='results'></p>

                        </div>
                    </div>
                </div>
            </section>


            <section className='background-section6' id='contact-customer'>
                <div className='request-call'>
                      <img src={Line} alt="spot-group" className='line-1'/>
                    <h5>Our subscribe</h5>
                    <h3>Tell us about your job</h3>
                    <p>We recommended you to subscribe to our promo program,
                        drop your email below to get daily update about us</p>
                    <form action="" className='call-form'>
                        <div className='form-control-1'>
                            <label htmlFor='name'>
                                <input type="text" name="name" id="name" placeholder='Enter your name here'/>
                            </label>
                        </div>

                        <div className='form-control-2'>
                            <label htmlFor='name'>
                                <input type="text" name="email" id="email" placeholder='Enter your email here'/>
                            </label>
                        </div>

                        <div className='form-control-3'>
                            <label htmlFor='name'>
                                <input type="text" name="text" id="text" placeholder='Enter your  here'/>
                            </label>
                        </div>
                        <input type="submit" value='Send' id='submit' className='btn-call'/>
                    </form>
                </div>
            </section>


            {/*testimonials section6*/}




        </div>
    )
}

export default VideoBg