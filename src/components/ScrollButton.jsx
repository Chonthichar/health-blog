import React, {useState} from "react";
import {FaArrowAltCircleDown} from "react-icons/fa";
import { Button } from './Styles'

    const ScrollButton = () => {
        const [visible, setVisible] = useState(true)

        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 0) {
                setVisible(false)
            } else if (scrolled <= 0) {
                setVisible(true)
            }
        };

        const scrollToButton = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'auto'
            });
        };
        window.addEventListener('scroll', toggleVisible)
        return (
            <Button>
                <FaArrowAltCircleDown onClick={scrollToButton}
                                      style={{display: visible ? 'inline' : 'none'}}/>
            </Button>
        )
    }

export default ScrollButton