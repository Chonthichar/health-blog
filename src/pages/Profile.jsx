import {getAuth, updateProfile} from "firebase/auth";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc} from 'firebase/firestore';
import {db} from '../firebase.config';
import {toast} from "react-toastify";
import ListingItem from "../components/ListingItem";

import {FaArrowRight} from "react-icons/fa";
import {FaHome} from "react-icons/fa";


function Profile() {
    const auth = getAuth()

    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const {name, email} = formData;

    const navigate = useNavigate();


    //Make all listing to be in profile page
    useEffect(() => {
        const fetchUserListings = async () => {
            const listingsRef = collection(db, 'listings')

            const q = query(
                listingsRef,
                where('userRef', '==', auth.currentUser.uid),
                orderBy('timestamp', 'desc')
            )
            const querySnap = await getDocs(q)

            const listings = []

            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            setListings(listings)
            setLoading(false)
        }
        fetchUserListings()
    }, [auth.currentUser.uid])


    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                // Update display name in fb
                await updateProfile(auth.currentUser, {
                    displayName: name
                })
                //    update in Firestore
                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name
                })
            }
        } catch (error) {
            toast.error('Could not upload profile details')
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }


    const onDelete = () => {

    }


    //Edit details
    const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`)


    return (

        <div className='  flex flex-col items-center justify-center bg-fixed'>
            <div className='profile  font-sans shadow-md rounded px-8 pb-8 mb-20 mt-0 min-vh-10bg-fixed'
                 style={{
                     backgroundImage: "url(" + "https://images.unsplash.com/photo-1556292026-bf74f176f6b" +
                         "2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" + ")"
                 }}>

                <div
                    className=' -mt-8 backdrop-brightness-50 bg-white/30 font-sans shadow-2xl rounded px-8 pb-8 mb-20 mt-0 min-vh-10'>
                    <header className='profileHeader'>
                        <p className='  pt-6 -mt-8 h-20 min-h-full pageHeader font-sans text-3xl antialiased md:subpixel-antialiased font-bold leading-10 text-center
                text-zinc-100 rounded-b-lg w-full'
                           style={{
                               backgroundImage: "url(" + "https://images.unsplash.com/photo-1556292026-bf74f176f6b" +
                                   "2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" + ")"
                           }}>My Profile</p>
                        <button type='button'
                                className='logOut text-1xl logOut py-2 px-4 bg-green-500 text-white font-semibold rounded-full shadow-md opacity-75
                                hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-opacity-100'
                                onClick={onLogout}>
                            Log Out
                        </button>
                    </header>
                    <main>
                        <div className="profileDetailHeader contents flex align-items-center justify-between">
                            <p className="profileDetailsText flex-1 flex align-items-center justify-between">Personal
                                Details</p>
                            <p className="changePersonalDetails flex-1 inline-block align-baseline font-bold text-xl text-white hover:text-green-800
                        flex align-items-center justify-between " onClick={() => {
                                changeDetails && onSubmit()
                                setChangeDetails((prevState => !prevState))
                            }}>
                                {changeDetails ? 'done' : 'change'}
                            </p>
                        </div>

                        <div className='profileCard'>
                            <form>
                                <input type="text" id="name"
                                       className={!changeDetails ? 'profileName' : 'profileNameActive'}
                                       disabled={!changeDetails}
                                       value={name}
                                       onChange={onChange}
                                       className='shadow appearance-none border rounded w-48 md:w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center pt-20'
                                />

                                {/*<input type="text" id="email"*/}
                                {/*       className={!changeDetails ? 'profileEmail' : 'profileNameEmail'}*/}
                                {/*       disabled={!changeDetails}*/}
                                {/*       value={email}*/}
                                {/*       onChange={onChange}*/}
                                {/*       className='shadow appearance-none border rounded w-48 md:w-full py-2 px-3 text-gray-700 leading-tight*/}
                                {/*focus:outline-none focus:shadow-outline text-center'*/}
                                {/*/>*/}
                            </form>
                            <form>
                                <input type="text" id="email"
                                       className={!changeDetails ? 'profileEmail' : 'profileNameEmail'}
                                       disabled={!changeDetails}
                                       value={email}
                                       onChange={onChange}
                                       className='shadow appearance-none border rounded w-48 md:w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                                />
                            </form>
                        </div>

                        <Link to='/create-listingBlog' className='createListing'>
                            <FaHome/>
                            <p>Insert your contents here</p>
                            <FaArrowRight/>
                        </Link>


                    </main>
                </div>
            </div>

            <div>
                <p>your listing</p>
                {/* loading*/}
                {!loading && listings?.length > 0 && (
                    <>
                        <p className='listingText'> Your listings</p>
                        <ul className='listingsList'>
                            {listings.map((listing) => (
                                <ListingItem
                                    key={listing.id}
                                    listing={listing.data}
                                    id={listing.id}
                                    onDelete={() => onDelete(listing.id)}
                                    onEdit={() => onEdit(listing.id)}
                                />
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>


    )
}

export default Profile