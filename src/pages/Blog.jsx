import {Link} from 'react-router-dom'
import travelImage from '../asset/travel_1.jpg'
import travelImage_1 from '../asset/travel_2.jpg'
import Slider from "../components/Slider";
//photo
import Food1 from "../asset/blog-fodd1.jpg"
import Food2 from "../asset/blog-food2.jpg"
import Food3 from "../asset/blpg-food3.jpg"
import Food4 from "../asset/blog-food4.jpg"
import Food5 from "../asset/blog-food5.jpg"
import Inspi from "../asset/blog-inspiration.JPG"
import Diet from "../asset/blog-food.jpg"
import Heading1 from "../asset/blog-heading.jpg"
import Heading2 from "../asset/blog-head2.jpg"
import Heading3 from "../asset/blog-heading3.jpg"
import {HashLink} from "react-router-hash-link";

function Blog() {

    return (
        <div className='explore container'>
            <header className='back-ground'>
                <p className='pageHeader'>"About Blogs" <br/>Life Recipe</p>
                <HashLink to='/#blogs'>
                    <button className='exploreHeading'>View Blogs</button>
                </HashLink>
                <img src={Heading1} alt="sale" className='photo-grid'/>
                <img src={Heading3} alt="sale" className='photo-grid-1'/>
                <img src={Heading2} alt="sale" className='photo-grid-2'/>

            </header>
            <main>
                <Slider/>

                <p className='exploreCategoryHeading'>Categories</p>
                <div className='gridBlogs' id='blogs'>
                    <Link to='/category/rent' style={{textDecoration: 'none'}}>
                        <img src={Inspi}
                             alt="rent"
                             className='exploreCategories'/>
                        <p>Inspiration & Mental Health and Sport</p>
                    </Link>
                    <Link to='/category/sale' style={{textDecoration: 'none'}}>
                        <img src={Diet}
                             alt="sale"
                             className='exploreCategories'/>
                        <p style={{textDecoration: 'none'}}>Food and Diet</p>
                    </Link>
                </div>
            </main>

            <div className='photo-last-grid'>
                {/*<p>call</p>*/}
                <div className='circle-image'>
                    <span><img src={Food1} alt="sale" className='last-grid-1'/>Food Diet</span>
                    <span><img src={Food2} alt="sale" className='last-grid-2'/>Daily Meals</span>
                    <span><img src={Food3} alt="sale" className='last-grid-3'/>Diet Drink</span>
                    <span><img src={Food4} alt="sale" className='last-grid-4'/>Desert Coke</span>
                    <span><img src={Food5} alt="sale" className='last-grid-5'/>Coconut Milk</span>
                </div>
                <div className='grid-sub'>
                    <p>Subscribe</p>
                    <input type="text" placeholder='subscribe'/>
                    <button className='sub-button'>scbscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Blog