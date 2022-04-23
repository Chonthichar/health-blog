import {useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Container, Nav, NavDropdown} from "react-bootstrap";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaDropbox} from "react-icons/fa";
import {FaPeopleCarry} from "react-icons/fa";


// import {HomeIcon} from "../assest/icons8-home.gif"


function Navbar({title}) {
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
            <nav className='container'>
                {(toggleMenu || screenWidth > 500) && (
                    <div className='navbarItem-container text-center'>
                        <Link to='/' className='navbar-logo'>
                            <p className='navbar-text'>Health Me</p><img
                            src="https://img.icons8.com/plumpy/36/000000/natural-food.png"/>
                        </Link>

                        <ul className='list'>
                            <li fill={locationMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'
                                className='itemsNav'>
                                <a onClick={() => navigate('/')}>
                                    Home
                                </a>
                            </li>

                            <li fill={locationMatchRoute('/about') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'
                                className='itemsNav'>
                                <a onClick={() => navigate('/about')}>
                                    About
                                </a>
                            </li>

                            <li fill={locationMatchRoute('/blog') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'
                                className='itemsNav'>
                                <a onClick={() => navigate('/blog')}>
                                    Blogs
                                </a>
                            </li>

                            <li fill={locationMatchRoute('/offer') ? '#2c2c2c' : '8f8f8f'} width='36px' height='36px'
                                className='itemsNav'>
                                <a onClick={() => navigate('/offer')}>
                                    Offers
                                </a>
                            </li>

                            <li fill={locationMatchRoute('/contact') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'
                                className='itemsNav'>
                                <a onClick={() => navigate('/contact')}>
                                    {/*<img src="https://img.icons8.com/color/60/000000/user-location.png"/>*/}
                                    {/*<img src="https://img.icons8.com/doodle/48/000000/mail-contact.png"/>*/}
                                    {/*<img*/}
                                    {/*    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-send-essentials-tanah-basah-glyph-tanah-basah.png"*/}
                                    {/*style={{color:'white'}}/>*/}
                                    <img
                                        src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/30/000000/external-send-contact-flatart-icons-flat-flatarticons.png"/>
                                </a>
                            </li>

                            <li fill={locationMatchRoute('/profile') ? '#2c2c2c' : '8f8f8f'} width='36px' height='30px'
                                className='itemsNav'>
                                <a className='profiles' onClick={() => navigate('/profile')} style={{
                                    backgroundColor: '#FB9333',
                                    margin: '24px',
                                    borderRadius: '100px',
                                    color: 'white',
                                    height: '54px',
                                    width: '126px',
                                    // padding: '24px 32px',
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    paddingTop: '10px'
                                }}>
                                    {/*<img src="https://img.icons8.com/color/48/000000/add-user-female.png"/>*/}
                                    {/*         <img src="https://img.icons8.com/small/64/000000/user-location.png"/>*/}
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
                <button onClick={toggleNav} className='btn'><img
                    src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/30/000000/external-down-arrow-maps-and-navigations-smashingstocks-glyph-smashing-stocks.png"/>
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