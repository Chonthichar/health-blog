import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {collection, getDocs, query, orderBy, limit} from "firebase/firestore";
import {db} from '../firebase.config'
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Photo from "../asset/e-learning.png"
//icons
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaSubscript} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import Ploy from "../asset/blog-ploy.jpg"
import Spinner from "../pages/Spinner";
// import Spinner from "../../Spinner";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

//spinner componnet

function Slider() {
    const [loading, setLoading] = useState(true);
    const [listings, setListings] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {

        const fetchListings = async () => {
            const listingsRef = collection(db, 'listings')
            const q = query(listingsRef, orderBy('timestamp', 'desc'),
                limit(5))
            const querySnap = await getDocs(q)

            let listings = [];

            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            // console.log(listings)
            setListings(listings)
            setLoading(false)
        }
        fetchListings()
    }, [])

    if (loading) {
        return <p><Spinner/></p>
    }

    //incase no listing on the slide
    if (listings.length === 0) {
        return <></>
    }

    return (
        <>
            <div className='columnGridText'>
                <p className='swipperHeading'>Most Popular recent blogs</p>
            </div>

          <Swiper slidesPerView={1}
                        pagination={{clickable: true}}>
                    {
                        listings.map(({data, id}) => (
                            <SwiperSlide key={id}
                                         onClick={() => navigate(`/category/${data.type}/${id}`)}>
                                <div style={{
                                    background: `url(${data.imageUrls[0]})
                                    center no-repeat`,
                                    backgroundSize: 'cover',
                                    height: '400px',
                                    // marginRight: 'auto',
                                    // marginTop: 'auto'
                                    // width: '50%'
                                }}


                                     className='swipperSlider'>
                                    <p className='swiperSlideText'>{data.name}</p>
                                    {/*about the price*/}
                                    {/*<p className='swiperSlidePrice'>${data.discountedPrice ?? data.regularPrice}*/}
                                    {/*    {data.type === 'rent' && '/month'}*/}
                                    {/*</p>*/}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            <div className='columnGrid'>
                <div className='grid'>
                     {/*<p className='swipperHeading-1'>Get to know the Author....</p>*/}
                    <img src={Ploy} alt="{Profile" className='profile-photo'/>

                    <h2>Warunee S.</h2>
                    <p>Passionate in Health care consulting and love to encourage people to care and love more on themselves.</p>
                    <h3>Subscribe and Follow</h3>
                    <div className='gridSubscripe'>
                        <a href="https://www.facebook.com/Ploywaruneest" style={{textDecoration: 'none'}}>
                            <button type='button'><FaFacebook className='fa'/> Follow me on</button>
                        </a>
                        <a href="https://www.instagram.com/warunee2465/?hl=en" style={{textDecoration: 'none'}}>
                            <button><FaInstagram className='fa'/>Follow me on</button>
                        </a>
                        <a href="https://www.linkedin.com/" style={{textDecoration: 'none'}}>
                            <button><FaLinkedin className='fa'/>Follow me on</button>
                        </a>
                        <a href="https://www.youtube.com/shorts/Q5SoHn-3IN0" style={{textDecoration: 'none'}}>
                            <button><FaSubscript className='fa'/>Subscribe</button>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider