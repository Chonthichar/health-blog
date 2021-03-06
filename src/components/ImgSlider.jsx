import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {HashLink} from "react-router-hash-link";

const slideImages = [
  {
    url: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: <h1 className=''>Choose The Best
                        <br/>Version of You.</h1>

  },
  {
    url: 'https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?cs=srgb&dl=pexels-picjumbocom-196643.jpg&fm=jpg',
    caption: <p className="">Eat healthy, Stay Healthy.</p>
  },
  {
    url: 'https://images.pexels.com/photos/209449/pexels-photo-209449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption:   <h2 className="be-prepare">"Get some more life's tips"</h2>
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`, height: '500px', backgroundSize: 'cover', backgroundPosition:'center'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow