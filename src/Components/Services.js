import React from 'react';
import Img1 from '../assets/3.jpg';
import Img2 from '../assets/4.jpg';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Services() {
    return (
        <> 
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                interval={1000}
            >
                <div>
                    <img src={Img1} alt="Item-1" />
                    <p>Full Stack</p>
                </div>

                <div>
                    <img src={Img2} alt="Item-2" />
                    <p>Peer-to-peer Support</p>
                </div>
            </Carousel>
        </>
    )
}

export default Services;