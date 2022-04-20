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
        } catch
            (error) {
            toast.error('Bad User Credentials')
        }
    }

return (
    <>
        <div className=' flex flex-col items-center justify-center'>
            <form onSubmit={onSubmit}
                  className="bg-white shadow-md rounded px-8 pb-8 mb-20 mt-0 min-vh-10">
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
                        className='emailInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline text-center'
                        id='email'
                        value={email}
                        type='email'
                        placeholder='Email'
                        onChange={onChange}

                    />
                </div>

                <div className='mb-6 passwordInputDiv'>
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
                    <input className='passwordInput shadow appearance-none border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight
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


                <div class='md:flex md:items-center"'>
                    <p className='sinInText md:w-2/3'>Sign In</p>
                    <button
                        className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>
                        <FaArrowRight style={{color: 'white', width: '300%'}}/>
                    </button>
                </div>


                <div className='signInBar flex align-items-center justify-content-center'>
                    <span>Don't have an Account yet?</span> <br/>
                    <Link to='/sign-up'
                          className='registerLink forgotPasswordLink mt-2 d-inline-block align-baseline font-bold text-xs text-green-500 hover:text-blue-800'>
                        Sign Up Instead
                    </Link>
                </div>
            </form>


            {/* Google OAuth*/}
            <OAuth/>

        </div>
    </>
)
}

export default SignIn