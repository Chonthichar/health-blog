import {useState, useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from '../firebase.config';
import {toast} from "react-toastify";
import {FaLinkedin} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

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
                // console.log(docSnap.data())
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
            {/*<header>*/}
            {/*    <p className='pageHeader'>Contact the writer</p>*/}
            {/*</header>*/}

            {/*{landlord !== null && (*/}
            {/*    <main>*/}
            {/*        <div className='contactOwner'>*/}
            {/*            <p className='ownerName'>contact {landlord?.name}</p>*/}
            {/*        </div>*/}

            {/*        <form className='messageForm'>*/}
            {/*                <div className='messageDiv'>*/}
            {/*                    <label htmlFor="message" className='messageLabel'>*/}
            {/*                        Message*/}
            {/*                    </label>*/}
            {/*                    <textarea name="message" id="message" className='textarea' value={message} onChange={onChange}>Message</textarea>*/}
            {/*                </div>*/}

            {/*            <a href={`mailto:${landlord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}>*/}
            {/*                <button className='primaryButton' type='button'>send Message</button>*/}
            {/*            </a>*/}

            {/*        </form>*/}
            {/*    </main>*/}
            {/*)}*/}
                         {/*section 5 contact*/}

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
                            <a href="https://www.facebook.com/Ploywaruneest"><FaFacebook className='ico'/></a>
                            <a href="https://www.instagram.com/warunee2465/?hl=en"><FaInstagram className='ico'/></a>
                        </div>

                           {/*<div className='copys'>*/}
                           {/*     <p className='copy'><FaHome className='phone'/> Hua Hin Thailand 77110</p>*/}
                           {/*     <p className='copy'><FaPhone className='phone'/>+66 871651655</p>*/}
                           {/*     <p className='copy'>chonthichar.soythong@gmail.com</p>*/}
                           {/*     <p className='copy'><FaLine className='phone'/>0871651655</p>*/}
                           {/* </div>*/}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact