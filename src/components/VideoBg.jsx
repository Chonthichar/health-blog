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

//section 6 testimonials said

const testimol = [
    {
        name: "Warunee",
        title: "Crete Health Care Website",
        image: `${require("../asset/photo_1.jpg")}`,
        quote: "I was really appreciate the job that she done. She was very professional and build the project exactly base on what i want."
    },
    {
        name: "Tourist industry field, RMUTR",
        title: "E-learning website project",
        image: `${require("../asset/img_1.jpg")}`,
        quote: "The services was excellent. I will definitely work with her again for sure"
    },
    {
        name: "Map",
        title: "Map Javascript",
        image: `${require("../asset/travel_1.jpg")}`,
        quote: "Good work and nice services"
    }
];


function VideoBg() {
    const navigate = useNavigate()

    //varibles for testimonials
    let photoList = useRef(null)
    let testimolList = useRef(null)
    const imageWidth = 340;


    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });

    useEffect(() => {
        gsap.to(testimolList.children[0], 0, {opacity: 1})
        console.log(photoList.children[0]);
        //    check list item
    }, [])

    const slideLeft = (index, duration, multiplied = 1) => {
        gsap.to(photoList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        gsap.to(photoList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };


    const scale = (index, duration) => {
        gsap.from(photoList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut
        });
    };

    //content transition

    const fadeOut = (index, duration) => {
        gsap.to(testimolList.children[index], duration, {
            opacity: 0
        })
    }

    const fadeIn = (index, duration) => {
        gsap.to(testimolList.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    //Function for next and preve slide

    const nextSlide = () => {
        if (photoList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive2: true});


            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0)

            fadeOut(0, 1)
            fadeIn(1, 1)


        } else if (photoList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive3: true});
            slideRight(0, 1)
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1)

            fadeOut(1, 1);
            fadeIn(2, 1);

        } else if (photoList.children[2].classList.contains('active')) {
            setState({isActive1: true, isActive3: false});
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            fadeOut(2, 1);
            fadeIn(0, 1);
        }
        console.log('next slide')
    }


    const previousSlide = () => {
        if (photoList.children[0].classList.contains('active')) {
            setState({isActive1: false, isActive3: true});

            slideLeft(2, 0, 3);
            slideLeft(2, 1, 2);
            scale(2, 1)
            slideRight(0, 1);
            slideRight(1, 1);

            fadeOut(0, 1)
            fadeIn(2, 1)


        } else if (photoList.children[1].classList.contains('active')) {
            setState({isActive2: false, isActive1: true});
            slideLeft(0, 0)
            slideRight(0, 1, 0);
            slideRight(1, 1, 0);
            slideRight(2, 1, 2);
            scale(0, 1)

            fadeOut(1, 1);
            fadeIn(0, 1)

        } else if (photoList.children[2].classList.contains('active')) {
            setState({isActive2: true, isActive3: false});
            slideLeft(2, 1);
            slideLeft(1, 0, 2);
            slideLeft(1, 1);
            scale(1, 1);
            fadeOut(2, 1);
            fadeIn(1, 1);

        }
        console.log('next slide')
    }


    return (
        <>
            <div className='home-container'>
                <img src={Pink} alt="backgroundpink" className='dec-3'/>
                <img src={Pho} alt="photo_2" className='dec-1'/>
                <img src={Pho} alt="photo_2" className='dec-2'/>
                <video id="background-video" class='background-video' autoPlay loop muted
                       poster="https://assets.mixkit.co/videos/preview/mixkit-woman-typing-on-her-laptop-in-a-coffee-shop-206-large.mp4">
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-woman-typing-on-her-laptop-in-a-coffee-shop-206-large.mp4"
                        type="video/mp4"/>
                </video>

                <h1>Looking for a beautiful Website?</h1>
                <p>Start by building your business with us.</p>
                <div className='home-button'>
                    <Button className='button'>
                        Services
                    </Button>
                </div>
                {/* dot*/}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-back'>
                <path fill="#ffEBF2" fill-opacity="1"
                      d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,133.3C672,117,768,107,864,90.7C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            {/*section 2 who we are*/}
            <div className='background-section2'>
                {/*<img src={Frame} alt="photo" className='svg-imgs'/>*/}
                {/*<div className='blog'>*/}
                {/*< ScrollButton/>*/}
                <h1>Get To Know Us?</h1>
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

            <div className='background-section3 container-sm'>
                <h1>See our Recent Projects Below..</h1>
                <p>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage
                    every aspect of your business in one secure platform.</p>
                <div className='wrapper'>
                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={E_learning} alt="photo_1"/>
                        </div>
                        <div className='texts'>
                            <h2 className='text-title'>"Check It Out"</h2>
                            <p className='text-titles'>E-learning Website Project</p>
                        </div>
                    </div>


                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={E_learning} alt="photo_1"/>
                        </div>
                        <div className='texts'>
                            <h2 className='text-title'>"Check It Out"</h2>
                            <p className='text-titles'>Recipe Menu</p>
                        </div>
                    </div>

                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={Health} alt="photo_1"/>
                        </div>
                        <div className='texts'>
                            <h2 className='text-title'>"Check it out"</h2>
                            <p className='text-titles'>Personal Healthcare Project</p>
                        </div>
                    </div>


                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={E_learning} alt="photo_1"/>
                        </div>

                        <div className='texts'>
                            <h2 className='text-title'>"Check It Out"</h2>
                            <p className='text-titles'>WebApp tracking App</p>
                        </div>
                    </div>

                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={Frame} alt="photo_1"/>
                        </div>

                        <div className='texts'>
                            <h2 className='text-title'>"Check It Out"</h2>
                            <p className='text-titles'>Journey Blog.</p>
                        </div>
                    </div>


                    <div className='cards'>
                        <div className='svg-img'>
                            <img src={Spa} alt="photo_1"/>
                        </div>

                        <div className='texts'>
                            <h2 className='text-title'>"Check It Out"</h2>
                            <p className='text-titles'>E-commerce Spa Project</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 4 working with shoplift*/}


            {/*section what we can do for you*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(44, 57, 75)" fill-opacity="1"
                      d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,117.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <section className='background-section5'>
                <div className='box container-sm'>
                    <h2 className='head-text'>What we can do for you?</h2>
                    {/*<div className='underline'></div>*/}
                    <p className='text-component'>Check Out What fit for your bussiness.</p>


                    <div className='process'>
                        <div>
                            <FaPeopleCarry className='process-icon'/>

                            <h3>Web Design</h3>
                            <p>Help your website stand out with beautiful website design With focus on small components,
                                layout,
                                graphics, colors, fonts, structure, content, fit for your business,
                                ecommerce, online portfolios, and more..</p>
                        </div>

                        <div>
                            <FaComment className='process-icon'/>
                            <h3>Restyling Your site</h3>
                            <p>We offer the good deal for restyling your site, Landing Page and E-commerce to customize
                                the content up to date. Implement your website in reusable way.</p>
                        </div>

                        <div>
                            <FaStar className='process-icon'/>
                            <h3>Shopify Online Store</h3>
                            <p>You need a online shop with Shopify? Let's us help you build a professional business
                                online store base on your requirements and get your online business store running
                                perfectly.</p>
                        </div>

                        <div>
                            <FaBusinessTime className='process-icon'/>
                            <h3>Responsive Website</h3>
                            <p>Make your website to be probably viewed on a wide variety of screens. Make sure that your
                                website are correctly running on any devices, any web browser and all operating
                                system.</p>
                        </div>

                        <div>
                            <FaHome className='process-icon'/>
                            <h3>Website support and Mainteance Services</h3>
                            <p>Make sure to keep your website up-to-date and ensuring that it's all working at full
                                capacity, engaging, relating site visitors, security, backups incase of disaster,
                                software update.</p>
                        </div>


                        <div>
                            <FaHeart className='process-icon'/>
                            <h3>Modern styling UI and UX style</h3>
                            <p>Take advantage of the latest modern technologies to build amazing web experiences for
                                your clients, included design, web publishing, wen maintenance.</p>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="rgb(44, 57, 75)" fill-opacity="1"
                      d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,117.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>


            <div className='background-section4-step1'>
                <div className='blogs-text'>
                    {/*<img src={Blue} alt="blue" className='dec-4'/>*/}
                    <img src={Com} alt="blue" className='dec-4'/>
                    <img src={Pho} alt="photo_2" className='dec-8'/>
                    {/*<div></div>*/}
                    <h1>1.</h1>
                    <h1><strong>Create Website</strong></h1>
                    {/*<h3><a href='https://www.shopify.com/website'>start from 2,999 Baht</a></h3>*/}
                    <h2>#Designing base on your need. <br/>Make your business more reliable and been seeing worldwide</h2>
                    <h6>✔ Blogger, Agency, Real estate, Accounting, Construction,Logo and Banner Designing</h6>
                    <h6>✔ World Press Design, Guest House, Hotel, Homestay, Health Care, Personal Health blog</h6>
                    <h6>✔ Restaurant, gallery, Cafe, Toursim Business, Clinic, Phamacy, Spar</h6>


                    {/*<a onClick={() => navigate('/contact')} className='contact'>Contact Us</a>*/}
                </div>
            </div>


            <div className='background-section4-step2'>
                <div className='blogs-text'>
                    <img src={Iphone} alt="blue" className='dec-5'/>
                    <h1>2.</h1>
                    <h1><strong>Suitable on different screen</strong></h1>
                    {/*<h3><a href='https://www.shopify.com/website'>start from 2,999 Baht</a></h3>*/}
                    <h2>PC / Tablet / SmartPhone</h2>
                    <h6>✔ Responsive design for all screen</h6>
                    <h6>✔ Quickly to get into Website</h6>
                    {/*<a onClick={() => navigate('/contact')} className='contact'>Contact Us</a>*/}
                </div>
            </div>


            <div className='background-section4-step3'>
                <div className='blogs-text'>
                    <img src={Google} alt="blue" className='dec-6'/>
                    <img src={Pho} alt="photo_2" className='dec-7'/>
                    <h1>3.</h1>
                    {/*<h3><a href='https://www.shopify.com/website'>start from 2,999 Baht</a></h3>*/}
                    <h1><strong>SEO easily to search and show on google and <br/> #Safe with SSL</strong></h1>
                    <h6>✔ Toursim Business</h6>
                    <h6>✔ Clinic, Phamacy, Spa</h6>

                    {/*<a onClick={() => navigate('/contact')} className='contact'>Contact Us</a>*/}
                </div>
            </div>


            {/*testimonials section6*/}
            <div className='background-section6'>
                <div className='testimonials-container'>
                    <div onClick={previousSlide} className='left-arrow'>
                        <span>
                           <FaArrowLeft className='arrows left arrows-left'/>
                        </span>
                    </div>

                    <div className='image-center'>
                        <div className='profile-image'>
                            <ul ref={el => (photoList = el)}>
                                <li className={state.isActive1 ? "active" : ''}>
                                    <img src={testimol[0].image} alt={testimol[0].name} className='img'/>
                                </li>
                                <li className={state.isActive2 ? "active" : ''}>
                                    <img src={testimol[1].image} alt={testimol[0].name} className='img'/>
                                </li>
                                <li className={state.isActive3 ? "active" : ''}>
                                    <img src={testimol[2].image} alt={testimol[0].name} className='img'/>
                                </li>
                            </ul>
                        </div>

                        <div className='profile-content'>
                            <ul ref={el => (testimolList = el)}>
                                <li className={state.isActive1 ? "active" : ""}>
                                    <div className='content-center'>
                                        <p className='quote'>{testimol[0].quote}</p>
                                        <h3 className='name'>{testimol[0].name}</h3>
                                        <h4 className='title'>{testimol[0].title}</h4>
                                    </div>
                                </li>

                                <li className={state.isActive2 ? "active" : ""}>
                                    <div className='content-center'>
                                        <p className='quote'>{testimol[1].quote}</p>
                                        <h3 className='name'>{testimol[1].name}</h3>
                                        <h4 className='title'>{testimol[1].title}</h4>
                                    </div>
                                </li>

                                <li className={state.isActive3 ? "active" : ""}>
                                    <div className='content-center'>
                                        <p className='quote'>{testimol[2].quote}</p>
                                        <h3 className='name'>{testimol[2].name}</h3>
                                        <h4 className='title'>{testimol[2].title}</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div onClick={nextSlide} className='right-arrow'>
                        <span>
                            <FaArrowRight className='arrows right arrow-right'/>
                        </span>
                    </div>
                </div>
            </div>

            <div className='background-section7-color'></div>
            <div className='background-section7-discount'>
                <div className='blogs-text'>
                    <h1>We provide the best version of your businesses.</h1>
                    {/*<h3><a href='https://www.shopify.com/website'>start from 2,999 Baht</a></h3>*/}
                    <h2>Start from <strong> (THB) 4,999.- </strong> ...Until 31st May!</h2><h5>(Discount From 8,999.-)</h5>
                    {/*<p>หน้าแรก ติดต่แผ่าน</p>*/}

                    <a onClick={() => navigate('/contact')} className='contacts'>FREE! consultation and
                        quotation</a>
                </div>
            </div>


            {/*section 5 contact*/}
            <body>
            <div className="main-contact" id='main-contact'>
                <div className="containers">
                    <div className="image">
                    </div>
                    <div className="form-area">
                        <h2>Send Me a Message</h2>
                        <form action="https://formsubmit.co/chonthichar.soythong@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Your Name"/>
                            <input type="email" name="email" placeholder="Email Address"/>
                            <input type="hidden" name="_subject" value="New submission on website maker web!"
                                   placeholder='subject'/>
                            {/*<input type="text" name="message" placeholder='subject'/>*/}
                            <input type="hidden" name="_autoresponse"
                                   value="Thanks for your submission. We will get back to you shortly."/>
                            {/*<input type="text" name="_honey" style="display:none" />*/}
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_template" value="table"/>
                            <textarea name="message" cols="30" rows="5" placeholder="Your Message">
                  </textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/chonthichar-soythong-3842b31a3/"><FaLinkedin
                                className='ico'/></a>
                            <a href="https://www.facebook.com/chonthichar.soythong/"><FaFacebook className='ico'/></a>
                            <a href="https://www.instagram.com/chonthicharsoythong/"><FaInstagram className='ico'/></a>
                        </div>
                    </div>
                </div>
            </div>
            </body>


        </>
    )
}

export default VideoBg