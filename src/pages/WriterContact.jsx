import {useState, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase.config'
import {toast} from "react-toastify";


function WriterContact() {
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()
    //useEffect ca  use we need the user
    useEffect(() => {
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setLandlord(docSnap.data())
                 // console.log(getLandlord())
            } else {
                toast.error('could not get the writer data')
            }
        }
        getLandlord()
    }, [params.landlordId])

    const onChange = e => setMessage(e.target.value)

    return (
        <div className='contact-header'>
            <header>
                <p className='contact-page-header'>Contact the Writer</p>
            </header>

            {landlord !== null && (
                <main>
                    <div className="contactWriter">
                        <p className='writerName'>Contact {landlord?.name}</p>
                    </div>

                    <form className="messageForm">
                        <div className='messageDiv'>
                            <label htmlFor="message" className='messageLabel'>
                                Message
                            </label>
                            <textarea name="message"
                                      id="message"
                                      className='textarea'
                                      value={message}
                                      onChange={onChange}>
                            </textarea>
                        </div>
                        <a href={`mailto:${landlord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}>
                            <button type='button' className="primaryButton">Send Message</button>
                        </a>

                    </form>
                </main>
            )}
        </div>
    )
}

export default WriterContact