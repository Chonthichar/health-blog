import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import {FaArrowRight} from "react-icons/fa";
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {toast} from "react-toastify";
import OAuth from "../components/OAuth";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {name, email, password} = formData;

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword
            (auth, email, password)

            const user = userCredential.user;

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')
        } catch (error) {
            toast.error('Something Went Wrong with registration')
        }
    }

    return (
        <>
            <div className=' flex flex-col items-center justify-center'>
                <header>
                    <p className='pageHeader text-3xl antialiased hover:subpixel-antialiased antialiased hover:subpixel-antialiased
                    text-dark-300'>Welcome
                        Back To Your Account !</p>
                </header>
                <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pb-8 mb-20 mt-0 min-vh-10">

                    <div className='mb-4 cursor-pointer'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='username'>
                            Name
                        </label>
                        <FaUser style={{
                            color: "green",
                            position: "absolute",
                            height: '50px',
                            textAlign: 'center',
                            minWidth: '50px',
                            padding: '10px',
                            marginBottom: '10px'
                        }}/>
                        <input
                            className=' nameInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                            id='name'
                            value={name}
                            type='text'
                            placeholder='Name'
                            onChange={onChange}

                        />
                    </div>

                    <div className='mb-4 cursor-pointer'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='username'>
                            username
                        </label>
                        <FaUser style={{
                            color: "green",
                            position: "absolute",
                            height: '50px',
                            textAlign: 'center',
                            minWidth: '50px',
                            padding: '10px',
                            marginBottom: '10px'
                        }}/>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                            id='email'
                            value={email}
                            type='email'
                            placeholder='Email'
                            onChange={onChange}

                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
                            Password
                        </label>
                        <FaEye
                            alt='show password'
                            className='showPassword cursor-pointer'
                            onClick={() => setShowPassword((prevState) => !prevState)}
                            style={{
                                color: "green",
                                position: "absolute",
                                float: 'right',
                                height: '50px',
                                minWidth: '50px',
                                padding: '10px',
                                marginBottom: '10px',
                            }}
                        />
                        <input className='shadow appearance-none border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline text-center'
                               id='password'
                               value={password}
                               onChange={onChange}
                               type={showPassword ? 'text' : 'password'}
                               placeholder='*************'
                        />

                        <Link to='/forgot-password'
                              className='forgotPasswordLink mt-2 d-inline-block align-baseline font-bold text-xs text-green-500 hover:text-blue-800'>
                            Forgot Password
                        </Link>
                    </div>

                    <div class='singUpBar md:flex md:items-center"'>
                        <p className='sinUpText md:w-2/3'>Sign Up</p>
                        <button
                            className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>
                            <FaArrowRight style={{color: 'white', width: '300%'}}/>
                        </button>
                    </div>

                    <div className='signInBar flex align-items-center justify-content-center'>
                        <span>Already have an account?</span>
                        <Link to='/sign-in'
                              className='registerLink forgotPasswordLink mt-2 d-inline-block align-baseline font-bold text-xs text-green-500 hover:text-blue-800'>
                            Sign In Instead
                        </Link>
                    </div>


                </form>
                {/* Google OAuth*/}

                <OAuth/>

            </div>
        </>
    )
}

export default SignUp