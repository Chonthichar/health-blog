import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from "./pages/Explore";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import ListingItem from "./components/ListingItem";
import {useParams} from "react-router-dom";
import category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact"
import EditListing from "./pages/EditListing";
import WriterContact from "./pages/WriterContact"


function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>

                    <Route path='/' element={<Explore/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>


                    <Route path='/profile' element={<PrivateRoute/>}>
                        <Route path='/profile' element={<Profile/>}/>
                    </Route>


                    <Route path='/create-listingBlog' element={<CreateListing />} />
                    <Route path='/category/:categoryName' element={<Category/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/category/:categoryName/:listingId' element={<Listing />}/>
                    <Route path='/contact/:landlordId' element={<Contact />}/>
                    <Route path='/edit-listing/:listingId' element={<EditListing />}/>
                    <Route path='/writerContact/:landlordId' element={<WriterContact />}/>
                </Routes>
                <Footer/>
            </Router>
            <ToastContainer/>
        </>
    )
}

export default App;
