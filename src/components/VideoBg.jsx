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
import Profile from "../asset/profile_ploy-removebg-preview (2).png"
import Video from "../asset/video-2.mp4"
import {Player} from 'video-react'
import Warunee from "../asset/warunee-removebg-preview.png"
import {HashLink} from 'react-router-hash-link';
import Ploy from "../asset/ploy-removebg-preview.png"



//section 6 testimonials said


function VideoBg() {
    const navigate = useNavigate()

    //BMI calculation late
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const calBmi = () => {
        let result = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(result);
        if (result < 18.5) {
            setInfo('Under Weight');
        } else if (result > 18.5 && result <= 24.9) {
            setInfo('Healthy');
        } else if (result > 24.9 && result < 39) {
            setInfo('Overweight');
        } else {
            setInfo('Obese')
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='home-container mh-100 mx-100'>
                    {/*<img src={Profile} alt="spot-group" className='profile'/>*/}

                    <h1>Choose The Best
                        <br/>Version of You.</h1>
                    <p>Eat healthy, Stay Healthy.</p>
                     <div className='top-box-1'>#1 Health care</div>
                    <img src={Spot} alt="spot-group" className='spot-1'/>
                    <img src={Spot} alt="spot-group" className='spot-2'/>

                    <div className='box-1'></div>
                    <div className='box-2'></div>
                    <div className='box-3'></div>
                    <img src={Ploy} alt="spot-group" className='profile' id='profile'/>


                    {/*<img src={Pink} alt="backgroundpink" className='dec-3'/>*/}
                    {/*<img src={Pho} alt="photo_2" className='dec-1'/>*/}
                    {/*<img src={Pho} alt="photo_2" className='dec-2'/>*/}

                    <div className='home-button' style={{textDecoration: 'none'}}>
                       <HashLink to='/#services' classNam>
                           <Button className='button' style={{textDecoration: 'none'}}>
                            Services
                        </Button>
                       </HashLink>
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
                    <p className='content-sec2'>Passionate in Health care consulting and love to encourage people to
                        care
                        and love more on themselves. There are few's tips that I would like to share to you through my
                        experiences. Read through the articles below and decide whether you would like to sign up to be
                        our
                        member. You will receive Free online tips and good advise on daily workout schedule routine.
                        Free
                        throughout the course include privacy health and weekly mental health care advising.
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
                                {/*<Player>*/}
                                {/*    <source src={Video} width="600" height="300" controls='controls' className='video' autoPlay loop muted />*/}
                                {/*</Player>*/}
                                {/*<Video/>*/}
                                <video controls='controls' className='video' autoPlay loop muted>
                                    <source src={Video} width="600" height="200" controls='controls' className='video'
                                            autoPlay loop muted/>
                                </video>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='column-2'>
                                <h4>What are you looking for?</h4>
                                <h2>We also provide the best tips for your workout routine. </h2>

                                <p>We believe that exercise help to gain more energy and fresh your brain.
                                    You already know that exercise is good for your body
                                    But did you know that it can also boost your brains and thought.More over to improve
                                    you
                                    beauty sleep,And also help you to get through depression and anxiety.
                                    Read through more about the mental health benefits of exercise.</p>
                                <a onClick={() => navigate('/contact')} className='contacts'>
                                    <i className='fas fa-leaf'></i>
                                    Read More
                                </a>

                            </div>
                        </div>
                    </div>
                </div>


                {/*section 5 what we can do for you*/}

                <section className='background-section5' id='services'>
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

                                <h3>How to?</h3>
                                <p>How to?
                                    Exercise and Depression
                                    Exercise is powerful depression fighter. Press me.</p>
                            </div>

                            <div className='process-2'>
                                <FaComment className='process-icon'/>
                                <h3>How To?</h3>
                                <p>Exercise and anxiety
                                    Exercise is very effective on anti anxiety-treatment. It relieves tension and
                                    stress.</p>
                            </div>


                            <div className='process-3'>
                                <FaHeart className='process-icon'/>
                                <h3>How To?</h3>
                                <p>Higher Self Esteem
                                    Daily work out is investment on yourself. Once it becomes your habit, it can foster
                                    your
                                    sense of self-worth.</p>
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
                                    <p>Your BMR calculator generates the number of calories your body burns per day at
                                        rest.
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
                                <p>Your BMI calculation weight is general base on the your body muscel. Please fill in
                                    your
                                    information
                                    here for more results.</p>
                                <form action="" className='call'>
                                    <div className='form-control-height'>
                                        <label htmlFor="height"></label>
                                        <input type="text"
                                               onChange={(e) => setHeight(e.target.value)}
                                               name="name"
                                               id="height"
                                               className='height form-input-height'
                                               placeholder='Place your height in cm'/>
                                    </div>

                                    <div className='form-control--weight'>
                                        <label htmlFor="weight"></label>
                                        <input type="text"
                                               onChange={(e) => setWeight(e.target.value)}
                                               name="name"
                                               id="height"
                                               className="weight form-input-weight"
                                               placeholder='Place your weight in kg'/>
                                    </div>

                                    <input onClick={calBmi} value="calculate" id="submitting" className='btn-c'/>
                                    <h6 style={{fontWeight: '200'}}> Your BMI calculation is..{bmi}..</h6>
                                    <h6 style={{color: 'black'}}>{info}</h6>
                                    {/*<button onClick={calBmi} type='submit' id='submitting' className='btn-c' >Calculate</button>*/}
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
                        <form action="https://formsubmit.co/chonthichar.soythong@gmail.com" method="POST"
                              className='call-form'>
                            {/*<div className='form-control-1'>*/}
                            <p>Enter your Name Here</p>
                            <label htmlFor='name'>
                                <input type="text" name="name" id="name"/>
                            </label>
                            {/*</div>*/}

                            {/*<div className='form-control-2'>*/}

                            <p>Enter your Email Here</p>

                            <label htmlFor='email'>
                                <input type="email" name="email" id="email"/>
                            </label>

                            <input type="hidden" name="_subject" value="New submission on website maker web!"
                                   placeholder='subject'/>
                            {/*<input type="text" name="message" placeholder='subject'/>*/}
                            <input type="hidden" name="_autoresponse"
                                   value="Thanks for your submission. We will get back to you shortly."/>
                            {/*<input type="text" name="_honey" style="display:none" />*/}
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_template" value="table"/>
                            {/*</div>*/}

                            {/*<div className='form-control-3'>*/}
                            <p>Enter your Request here</p>
                            <textarea name="message" cols="25" rows="4" className='textArea'>
                  </textarea>
                            {/*</div>*/}
                            <input type="submit" value='Send' id='submit' className='btn-call'/>
                        </form>
                    </div>
                </section>


                {/*testimonials section6*/}


            </div>
        </>
    )
}

export default VideoBg