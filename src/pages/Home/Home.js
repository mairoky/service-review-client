import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Home.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <main>
            <section className='hero-slider'>
                <div className="container">
                    <HeroSlider />
                </div>
            </section>
            <section className="services my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <div className="section-heading text-center">
                                <h2>Services</h2>
                                <p>Enabling Your Immigration Successfully</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        {/* <ServiceCard></ServiceCard> */}
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/services">
                            <Button variant="outline-dark">See All</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <About></About>
            <Features></Features>
            <Testimonials></Testimonials>
        </main>
    );
};

export default Home;