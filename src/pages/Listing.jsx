import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {getDoc, doc} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {db} from '../firebase.config'
//spinner
import {FaShare} from "react-icons/fa";
import Footer from "../components/Footer";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()


    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                // console.log(docSnap.data());
                setListing(docSnap.data())
                setLoading(false)
            }
        }
        fetchListing()
    }, [navigate, params.listingId])

    if (loading) {
        return (<p>Loading...</p>)
    }

    return (
        <main className='container laterListingPage'>

            {/*{slider}*/}
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}>
                {listing.imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <div style={{
                            background: `url(${listing.imageUrls[index]}) 
                            center no-repeat`,
                            backgroundSize: 'cover',
                            // height: '500px'
                        }}
                             className="swiperSlideDiv-listing">
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className='listingDetails'>
                <p className='listingName'>


                    {listing.name}
                    {/*have to mute the price behind*/}
                    {/*  {listing.name} - $*/}
                    {/*{listing.offer*/}
                    {/*    ? listing.discountedPrice*/}
                    {/*        .toString()*/}
                    {/*        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')*/}
                    {/*    : listing.regularPrice*/}
                    {/*        .toString()*/}
                    {/*        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}*/}
                </p>

                {auth.currentUser?.uid !== listing.userRef && (
                    <Link
                        to={`/writerContact/${listing.userRef}
                        ?listingName=${listing.name}`}
                        className='contactUs'>
                        Contact The Writer
                    </Link>
                )}

                      <div className="shareIconDiv" onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setShareLinkCopied(true)
                setTimeout(() => {
                    setShareLinkCopied(false)
                }, 2000)
            }}>
                <FaShare/>
            </div>

            {shareLinkCopied && <p className='linkCopied'>Link Copied</p>}

                {/*location*/}
                {/*<p className='listingLocation'>*/}
                {/*    {listing.location}*/}
                {/*</p>*/}
                {/*very important listing type*/}
                {/*<p className='listingType'>*/}
                {/*    For {listing.type === 'rent' ? 'Rent' : 'Sale'}*/}
                {/*</p>*/}
                {/*new on essay*/}
                <p className='listingEssay'>
                    {listing.essay}
                </p>

                {listing.offer && (
                    <p className='discountPrice'>
                        ${listing.regularPrice - listing.discountedPrice}
                        discount
                    </p>
                )}

                {/*mute bedroom and bathroom section*/}
                {/*<ul className='listingDetailList'>*/}
                {/*    <li>*/}
                {/*        {listing.bedRooms > 1 ? `${listing.bedRooms} Bedrooms` : '1 Bedroom'}*/}
                {/*    </li>*/}

                {/*    <li>*/}
                {/*        {listing.bedRooms > 1 ? `${listing.bathRooms} Bathroom` : '1 Bathroom'}*/}
                {/*    </li>*/}
                {/*    <li>{listing.parking && 'parking Spot'}</li>*/}
                {/*    <li>{listing.furnished && 'Furnished'}</li>*/}
                {/*</ul>*/}


                <p className='listingLocationTitle'>"Location"</p>
                {/*{Map}*/}
                <div id='map' className='leafletContainer'>

                    <MapContainer
                        style={{height: '500px', width: '100%'}} center={[51.505, -0.09]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
                            <Popup>
                                {listing.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>



            </div>
        </main>
    )
}

export default Listing