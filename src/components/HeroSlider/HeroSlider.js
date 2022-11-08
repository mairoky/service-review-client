import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../../images/hero/1.jpg';
import hero2 from '../../images/hero/2.jpg';
import hero3 from '../../images/hero/3.jpg';
import hero4 from '../../images/hero/4.jpg';
import hero5 from '../../images/hero/5.jpg';
import Button from 'react-bootstrap/Button';
import './HeroSlider.css';

const HeroSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="image-overlay">
                    <img
                        className="d-block img-fluid w-100 rounded"
                        src={hero1}
                        alt="First slide"
                    />
                </div>
                <div className="caption-center">
                    <h2>Plan the Trip of Your Dreams!</h2>
                    <p>We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with.</p>
                    <Button variant="dark">Learn More</Button>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div className="image-overlay">
                    <img
                        className="d-block img-fluid w-100 rounded"
                        src={hero5}
                        alt="Second slide"
                    />
                </div>
                <div className="caption-center">
                    <h2>Immigration Process Starts Here!</h2>
                    <p>We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with.</p>
                    <Button variant="dark">Learn More</Button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-overlay">
                    <img
                        className="d-block img-fluid w-100 rounded"
                        src={hero3}
                        alt="Third slide"
                    />
                </div>
                <div className="caption-center">
                    <h2>Study In Recognized Universities!</h2>
                    <p>We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with.</p>
                    <Button variant="dark">Learn More</Button>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSlider;