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
import {node} from "prop-types";

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
            <div className=' flex flex-col items-center justify-center container box-signUp'>
                <header>
                    <h1 className='create-account'>Welcome
                        Back!</h1>
                </header>
                <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pb-8 mb-2 mt-0 min-vh-10 consts">

                    <div className=' cursor-pointer box-signIn-email'>
                        <label className=' cursor-pointer  block labelUsername' for='username'>
                            Name
                        </label>
                        <FaUser style={{
                            color: "green",
                            position: "absolute",
                            height: '25px',
                            textAlign: 'center',
                            // minWidth: '30px',
                            marginTop: '2rem',
                            marginLeft: '2rem'
                        }}/>
                        <input
                            className='bg-white emailInput shadow appearance-none  rounded w-full py-3 px-3 m-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                            id='name'
                            value={name}
                            type='text'
                            placeholder='Name'
                            onChange={onChange}

                        />
                    </div>

                    <div className='mb-4 cursor-pointer'>
                        <label className='cursor-pointer  block labelUsername' for='username'>
                            username
                        </label>
                        <FaUser style={{
                            color: "green",
                            position: "absolute",
                            height: '25px',
                            textAlign: 'center',
                            // minWidth: '30px',
                            marginTop: '2rem',
                            marginLeft: '2rem'
                        }}/>
                        <input
                            className='bg-white emailInput shadow appearance-none  rounded w-full py-3 px-3 m-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                            id='email'
                            value={email}
                            type='email'
                            placeholder='Email'
                            onChange={onChange}

                        />
                    </div>

                    <div className='mb-6'>
                        <label className='cursor-pointer  block labelUsername' for='password'>
                            Password
                        </label>
                        {/*<FaEye*/}
                        {/*    alt='show password'*/}
                        {/*    className=' bg-white emailInput showPassword cursor-pointer'*/}
                        {/*    onClick={() => setShowPassword((prevState) => !prevState)}*/}
                        {/*    style={{*/}
                        {/*        color: "green",*/}
                        {/*        position: "absolute",*/}
                        {/*        height: '25px',*/}
                        {/*        textAlign: 'center',*/}
                        {/*        // minWidth: '30px',*/}
                        {/*        marginTop: '2rem',*/}
                        {/*        marginLeft: '2rem'*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<input className='bg-white emailInput shadow appearance-none  rounded w-full py-3 px-3 m-3 text-gray-700 leading-tight*/}
                        {/*    focus:outline-none focus:shadow-outline text-center'*/}
                        {/*       id='password'*/}
                        {/*       value={password}*/}
                        {/*       onChange={onChange}*/}
                        {/*       type={showPassword ? 'text' : 'password'}*/}
                        {/*       placeholder='*************'*/}
                        {/*/>*/}
                                 <FaEye
                            alt='show password'
                            className='showPassword cursor-pointer'
                            onClick={() => setShowPassword((prevState) => !prevState)}
                            style={{
                                color: "green",
                                position: "absolute",
                                height: '25px',
                                textAlign: 'center',
                                minWidth: '30px',
                                marginTop: '1.9rem',
                                marginLeft: '2rem'
                            }}
                        />
                        <input className='bg-white emailInput shadow appearance-none  rounded w-full py-3 px-3 m-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                               id='password'
                               value={password}
                               onChange={onChange}
                               type={showPassword ? 'text' : 'password'}
                               placeholder='*************'
                        />

                        <Link to='/forgot-password'
                              className='forgotPasswordLink mt-2 d-inline-block align-baseline font-bold text-xs text-green-500 hover:text-blue-800'
                              style={{textDecoration: 'none'}}>
                            Forgot Password
                        </Link>
                    </div>

                    <div class='singUpBar md:flex md:items-center"'>
                        <p className='singInText'>Sign Up</p>
                        <button
                            className=' buttonSignIn'>
                            <FaArrowRight style={{
                                color: 'white',
                                width: '170px',
                                height: '50px',
                                backgroundImage: 'linear-gradient(to right, rgb(255, 255, 255), rgb(46, 204, 113))',
                                padding: '10px',
                                borderRadius: '20px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}/>
                        </button>
                    </div>

                    <div className='signInBar flex align-items-center justify-content-center'>
                        {/*<span>Already have an account?</span>*/}
                        <Link to='/sign-in' style={{textDecoration: 'none'}}
                              className='registerLink forgotPasswordLink mt-2 d-inline-block align-baseline font-bold text-xs text-green-500 hover:text-blue-800'>
                            Sign In Instead
                        </Link>
                    </div>

                    {/* Google OAuth*/}
                    <OAuth/>
                </form>
            </div>
        </>
    )
}

export default SignUp