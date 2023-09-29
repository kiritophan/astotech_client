import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './multiCarousel.scss';
import { useNavigate } from 'react-router-dom';
import Content from '@/pages/homes/components/Contents/Content';


export default function MultiCarousel() {
    const navigate = useNavigate();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



    return (
        <div className='multicarousel-container'>
            <h2>Our Customer</h2>
            <Carousel
                autoPlay={true}
                // autoPlaySpeed={1000}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={1500}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 6,
                        partialVisibilityGutter: 50
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div className='product'>
                    <img src="https://rikkeisoft.com/wp-content/uploads/2023/07/QES-1.png" alt="" />

                </div>
                <div className='product'>
                    <img src="	https://rikkeisoft.com/wp-content/uploads/2023/07/USMH-2.png" alt="" />

                </div>
                <div className='product'>
                    <img src="https://rikkeisoft.com/wp-content/uploads/2023/07/Sunloft.png" alt="" />

                </div>
                <div className='product'>
                    <img src="https://rikkeisoft.com/wp-content/uploads/2023/07/Fujikin-1.png" alt="" />

                </div>
                <div className='product'>
                    <img src="https://rikkeisoft.com/wp-content/uploads/2023/07/cloudS.png" alt="" />

                </div>
                <div className='product'>
                    <img src="https://rikkeisoft.com/wp-content/uploads/2023/07/Studione63.png" alt="" />

                </div>
            </Carousel>
            <div>
                <Content />
            </div>
        </div>
    )
}
