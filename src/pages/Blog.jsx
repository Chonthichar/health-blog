import {Link} from 'react-router-dom'
import travelImage from '../asset/travel_1.jpg'
import travelImage_1 from '../asset/travel_2.jpg'
import Slider from "../components/Slider";

function Blog() {

    return (
        <div className='explore'>
            <header>
                <p className='pageHeader'>Explore</p>
            </header>
            <main>
               <Slider/>

                <p className='exploreCategoryHeading'>Categories
                    <div className='exploreCategoRies'>
                        <Link to='/category/rent'>
                            <img src={travelImage}
                                 alt="rent"
                                 className='exploreCategories'/>
                            <p>places for sale</p>
                        </Link>
                           <Link to='/category/sale'>
                            <img src={travelImage_1}
                                 alt="sale"
                                 className='exploreCategories'/>
                               <p>Places for rent</p>
                        </Link>
                    </div></p>
            </main>
        </div>
    )


    // return (
    //     <>
    //         <div className='services container mx-auto'>
    //             <section id='work-a' className='text-center py-3'>
    //                 <h2 className='section-title'>Public your Passion on Your way</h2>
    //                 <div className='bottom-line'></div>
    //                 <p className='lead'>
    //                     Create your own passion and photo here
    //                 </p>
    //
    //                 <div className='items'>
    //                     <Link to='/category/coding'>
    //                         <div className='item'>
    //                             <div className='item-image item'>
    //                                 <img src={travelImage} alt="" className='item-image item'/>
    //                             </div>
    //                             <div className='item-text'>
    //                                 <div className='item-text-wrap'>
    //                                     <p className='item-text-category'>Grow</p>
    //                                     <h2 className='item-text-title'>Grow wit confidence</h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //
    //                     <Link to='/category/Travel'>
    //                         <div className='item'>
    //                             <div className='item-image'>
    //                                 <img src={travelImage_1} alt=""/>
    //                             </div>
    //                             <div className='item-text'>
    //                                 <div className='item-text-wrap'>
    //                                     <p className='item-text-category'>Grow</p>
    //                                     <h2 className='item-text-title'>Grow wit confidence</h2>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //
    //
    //                 </div>
    //             </section>
    //
    //         </div>
    //     </>
    // )
}

export default Blog