import {useState, useEffect, useRef} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {addDoc, collection, serverTimestamp, doc, updateDoc, getDoc} from "firebase/firestore";
import {db} from '../firebase.config'
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {v4 as uuidv4} from 'uuid'
import Spinner from "./Spinner";


function EditListing() {
    const [geolocationEnabled, setGeolocationEnabled] = useState(true)

    const [loading, setLoading] = useState(false)
    const [listing, setListing] = useState(false)
    const [formData, setFormData] = useState({
       type: 'rent',
        name: '',
        essay: '',
        bedRooms: 1,
        bathRooms: 1,
        parking: false,
        furnished: false,
        address: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: {},
        latitude: 0,
        longitude: 0
    })

    const {
        type,
        name,
        essay,
        bedRooms,
        bathRooms,
        parking,
        furnished,
        address,
        offer,
        regularPrice,
        discountedPrice,
        images,
        latitude,
        longitude
    } = formData


    const auth = getAuth()
    const navigate = useNavigate()
    const params = useParams()
    const isMounted = useRef(true)


    //Redirect if listing is not user's
    useEffect(() => {
        if (listing && listing.userRef !== auth.currentUser.uid) {
            toast.error('You can not edit that listing')
            navigate('/')
        }
    })

    //Fetch listing to editing
    useEffect(() => {
        setLoading(true)
        const fetchListing = async () => {

            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setListing(docSnap.data())
                //recall old details from currently list
                setFormData({...docSnap.data(), address: docSnap.data().location})
                setLoading(false)
            } else {
                navigate('/')
                toast.error('Listing does not exits')
            }
        }
        fetchListing()
    }, [params.listingId, navigate])


    //sets userRef to login user
    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({...formData, userRef: user.uid})
                } else {
                    navigate('/sign-in')
                }
            })
        }
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    if (loading) {
        return (<p><Spinner/></p>)
    }

    const onSubmit = async e => {
        e.preventDefault();

        setLoading(true)

        if (discountedPrice >= regularPrice) {
            setLoading(false)
            toast.error('Discounted price need to be less than regular price')
            return
        }

        if (images.length > 8) {
            setLoading(false)
            toast.error('Max 6 images')
            return
        }

        let geolocation = {}
        let location

        if (geolocationEnabled) {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=
            ${process.env.REACT_APP_GEOCODE_API_KEY}`)

            const data = await response.json();
            console.log(data)

            geolocation.lat = data.results[0]?.geometry.location.lat ?? 0
            geolocation.lng = data.results[0]?.geometry.location.lng ?? 0

            location = data.status === 'ZERO_RESULTS' ? undefined : data.results[0]?.formatted_address

            if (location === undefined || location.includes('undefined')) {
                setLoading(false)
                toast.error('Please enter a correct address')
                return
            }
        } else {
            geolocation.lat = latitude
            geolocation.lng = longitude
            // location = address
            // console.log(geolocation, location)
        }

        // store images in firebase
        const storeImage = async (image) => {
            return new Promise((resolve, reject) => {
                const storage = getStorage()
                const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`

                const storageRef = ref(storage, 'images/' + fileName)

                const uploadTask = uploadBytesResumable(storageRef, image);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                        reject(error)
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            resolve(downloadURL);
                        });
                    }
                );
            })
        }

        const imageUrls = await Promise.all(
            [...images].map((image) => storeImage(image))
        ).catch(() => {
            setLoading(false)
            toast.error('Images not uploaded')
            return
        })

        //save listing to firebase
        const formDataCopy = {
            ...formData,
            imageUrls,
            geolocation,
            timestamp: serverTimestamp(),
        }

        formDataCopy.location = address
        delete formDataCopy.images
        delete formDataCopy.address
        // location && (formDataCopy.location = location)
        !formDataCopy.offer && delete formDataCopy.discountedPrice

        //update listing
        const docRef = doc(db, 'listing', params.listingId)
        await updateDoc(docRef, formDataCopy)
        setLoading(false)
        toast.success('Listing saved')
        navigate(`/category/${formDataCopy.type}/${docRef.id}`)
    }


    const onMutate = (e) => {
        let boolean = null

        if (e.target.value === 'true') {
            boolean = true
        }

        if (e.target.value === 'false') {
            boolean = false
        }

        //    File
        if (e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }))
        }

        //    Text /Bbolean ?Number
        if (!e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value,
            }))
        }
    }

    if (loading) {
        return (<p><Spinner/></p>)
    }

    return (
        // <div className='profile-createListing'>
           <div className='createListing-page container'>
            <header>
                <p className='pageHeader-createListing'>Edit a listing</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>


                    <div className='formButtons'>
                        <button type='button'
                                className={type === 'sale' ? 'formButtonActive' : 'formButton'}
                                id='type'
                                value='sale'
                                onClick={onMutate}>
                            Inspirations
                        </button>

                        <button type='button'
                                className={type === 'rent' ? 'formButtonActive' : 'formButton'}
                                id='type'
                                value='rent'
                                onClick={onMutate}
                        >
                            Diet
                        </button>
                    </div>

                    <label className='formLabel'>Topic</label>
                    <input type="text"
                           className='formInputName'
                           id='name'
                           value={name}
                           onChange={onMutate}
                           maxLength='80'
                           minLength='10'
                           required/>




                    <label className="formLabel">Address</label>
                    <textarea
                        className='formInputAddress'
                        type='text'
                        id='address'
                        value={address}
                        onChange={onMutate}
                        required
                    />

                    {!geolocationEnabled && (
                        <div className='formLatLng flex'>
                            <label className="formLabel">Latitude</label>
                            <input
                                className='formInputSmall'
                                type='number'
                                id='latitude'
                                value={latitude}
                                onChange={onMutate}
                                required
                            />
                        </div>
                    )}

                    <label className='formLabel'
                           htmlFor="" >Essay</label>
                    <textarea type="text"
                            className='formInputName-Essay'
                            id='essay'
                            value={essay}
                            onChange={onMutate}
                            maxLength='4000'
                            minLength='10'
                            placeholder='Add your Essay Here'
                            required/>


                    <label className="formLabel">Images</label>
                    <p className='imagesInfo'>The fiest image will be cover (max 6).</p>
                    <input className='formInputFile'
                           type='file'
                           id='images'
                           onChange={onMutate}
                           max='6'
                           accept='.jpg,.png,.jpeg'
                           multiple
                           required
                    />

                    <button type='submit' className='primaryButton createListingButton'>
                        Create Listing
                    </button>
                </form>
            </main>

        </div>
    )
}

export default EditListing