import {useState, useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from '../firebase.config';
import {toast} from "react-toastify";

function Contact() {
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()

    useEffect(() => {
        const getOwner = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                // setLandlord(docSnap.data())
                console.log(docSnap.data())
            } else {
                toast.error('Could not get the writer contact')
            }
        }


        getOwner()

        // console.log(getOwner())
    }, [params.landlordId])

    const onChange = e => setMessage(e.target.value)

    return (
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>Contact the writer</p>
            </header>

            {landlord !== null && (
                <main>
                    <div className='contactOwner'>
                        <p className='ownerName'>contact {landlord?.name}</p>
                    </div>

                    <form className='messageForm'>
                            <div className='messageDiv'>
                                <label htmlFor="message" className='messageLabel'>
                                    Message
                                </label>
                                <textarea name="message" id="message" className='textarea' value={message} onChange={onChange}>Message</textarea>
                            </div>

                        <a href={`mailto:${landlord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}>
                            <button className='primaryButton' type='button'>send Message</button>
                        </a>

                    </form>
                </main>
            )}
        </div>

    )
}

export default Contact