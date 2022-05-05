import {useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Container, Nav, NavDropdown} from "react-bootstrap";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaChild} from "react-icons/fa";
import {FaDropbox} from "react-icons/fa";
import {FaPeopleCarry} from "react-icons/fa";


// import {HomeIcon} from "../assest/icons8-home.gif"


function Navbar({title}) {
    // const [isNavExpanded, setIsNavExpanded] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const [toggleMenu, setToggleMenu] = useState(false)

    const locationMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    }

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <>
            <nav className='navigation-top container-fluid'>
                <div className='top-bar'>
                    <h1>🔥🔥 Just update the new blogs</h1>
                    {/*<Link to='/blog' className='top-blog'>blog</Link>*/}

                    <a href='/blog'>Blogs</a>

                </div>
            </nav>

            <nav className='navigation'>
                {(toggleMenu || screenWidth > 768) && (
                    <div className='menu'>


                        {/*<button className='hamburger'*/}
                        {/*        onClick={toggleNav}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"*/}
                        {/*         fill="currentColor">*/}
                        {/*        <path fill-rule="evenodd"*/}
                        {/*              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1*/}
                        {/*      1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
                        {/*                  clip-rule="evenodd"/>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}

                        {/*<div className='menu-1'>*/}
                            <ul className='list'>
                                {/*<li fill={locationMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                {/*    <Link to='/' className='brand-name'>*/}
                                {/*        <FaChild/>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                    <a onClick={() => navigate('/')} className='home'>
                                        Home
                                    </a>
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/about') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                {/*    <a onClick={() => navigate('/about')}>*/}
                                {/*        About*/}
                                {/*    </a>*/}
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/blog') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                    <a onClick={() => navigate('/blog')}  className='home'>
                                        Blogs
                                    </a>
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/offer') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                {/*    <a onClick={() => navigate('/offer')}>*/}
                                {/*        Offers*/}
                                {/*    </a>*/}
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/contact') ? '#2c2c2c' : '#8f8f8f'} width='36px'*/}
                                {/*    height='36px'*/}
                                {/*    className='itemsNav'>*/}
                                    <a onClick={() => navigate('/contact')}  className='home'>
                                        {/*<img src="https://img.icons8.com/color/60/000000/user-location.png"/>*/}
                                        <img src="https://img.icons8.com/doodle/48/000000/mail-contact.png"/>
                                        {/*<img*/}
                                        {/*    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-send-essentials-tanah-basah-glyph-tanah-basah.png"*/}
                                        {/*style={{color:'white'}}/>*/}
                                        {/*<img*/}
                                        {/*    src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/30/000000/*/}
                                        {/*    external-send-contact-flatart-icons-flat-flatarticons.png"/>*/}
                                    </a>
                                {/*</li>*/}

                                {/*<li fill={locationMatchRoute('/profile') ? '#2c2c2c' : '8f8f8f'} width='36px'*/}
                                {/*    height='30px'*/}
                                {/*    className='itemsNav'>*/}
                                    <a className='profiles' onClick={() => navigate('/profile')} style={{
                                    }}>
                                        {/*<img src="https://img.icons8.com/color/48/000000/add-user-female.png"/>*/}
                                        {/*         <img src="https://img.icons8.com/small/64/000000/user-location.png"/>*/}
                                        Profile
                                    </a>
                                {/*</li>*/}
                            </ul>
                        {/*</div>*/}
                    </div>
                )}
                <button className='hamburger'
                        onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                         fill="white">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1
                              1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"/>
                    </svg>
                </button>
            </nav>
        </>
    )
}

Navbar.defaultPros =
    {
        title: 'e-eommerce'
    }

Navbar.prototype =
    {
        title: PropTypes.string
    }


export default Navbar