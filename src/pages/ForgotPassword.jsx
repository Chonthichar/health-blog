import {useState} from "react";
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify";
import {FaArrowRight} from "react-icons/fa";


function ForgotPassword() {
    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Email was sent')

        } catch (error) {
            toast.error('Could not send reset email')
        }
    }


    return (
        <>
            <div className='pageContainer container'>

                <main>
                    <form onSubmit={onSubmit}>
                           <header>
                    <p className='pageHeader'>Forgot Password</p>
                </header>
                        <input type="email" className='emailInput-forgot'
                               placeholder='Email'
                               id='email'
                               value={email}
                               onChange={onChange}/>
                        <div className='forgotPasswordLink-forgotPage'>
                        <Link to='/sign-in' style={{textDecoration: 'none'}}>Sign In..</Link>
                        </div>
                        <div className='signInbar-Button'>
                            <button className='signInButton'>
                                Send Reset Link
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default ForgotPassword