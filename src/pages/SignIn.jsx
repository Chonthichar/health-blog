import {useState} from "react";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import OAuth from "../components/OAuth";


function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = formData;
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

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            toast.error('Bad User Credentials')
        }
    }

    return (
        <>
            <div className=' flex flex-col items-center justify-center container box-signIn'>
                <h1 className='create-account'>Sign In to get start!</h1>
                <form onSubmit={onSubmit}
                      className="const shadow-md rounded px-8 pb-8 mb-20 mt-0 min-vh-10">

                    <div className='mb-4 cursor-pointer box-signIn-email'>
                        <label className='block labelUsername' for='username'>
                            username
                        </label>
                        <FaUser style={{
                            color: "green",
                            position: "absolute",
                            height: '25px',
                            textAlign: 'center',
                            minWidth: '30px',
                            marginTop: '1.9rem',
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

                    <div className='mb-6 passwordInputDiv'>
                        <label className='block text-gray-700 text-sm font-bold mb-2 labelPassword' for='password'>
                            Password
                        </label>
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
                        <input className='bg-white passwordInput shadow appearance-none  rounded w-full py-3 px-3 m-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                               id='password'
                               value={password}
                               onChange={onChange}
                               type={showPassword ? 'text' : 'password'}
                               placeholder='*************'
                        />

                        <div className='forgotPasswordLink'>
                            <Link to='/forgot-password' style={{textDecoration: 'none'}}>
                                Forgot Password ?
                            </Link>
                        </div>
                    </div>


                    <div class='md:flex md:items-center signInDivBox'>
                        <p className='singInText'>Sign In</p>
                        <button
                            className=' buttonSignIn'>
                            <FaArrowRight style={{
                                color: 'white',
                                width: '100%',
                                height: '50px',
                                backgroundColor: 'rgb(78, 148, 79)',
                                padding: '10px',
                                borderRadius: '20px',
                                marginLeft: '0%'
                                // left: '80%'
                            }}/>
                        </button>
                    </div>


                    <div className='signUpBar'>
                        {/*<h6>Don't have an Account yet?</h6>*/}
                        {/*<p> Sign up and discover great amount of new opportunities!</p>*/}
                        <div className='registerLink'>
                            <Link to='/sign-up' style={{textDecoration: 'none'}}>
                                Sign Up Instead
                            </Link>
                        </div>
                    </div>
                    {/* Google OAuth*/}
                    {/*<OAuth/>*/}
                </form>
            </div>
        </>
    )
}

export default SignIn