import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Home.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

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
                        <ServiceCard></ServiceCard>
                    </div>
                    <div className="text-center mt-3">
                        <Link>
                            <Button variant="outline-dark">See All</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="about-us my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <div className="section-heading text-center">
                                <h2>About</h2>
                                <p>A One-Stop Solution For All Your Visa Needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <div className="section-heading text-center">
                                <h2>Features</h2>
                                <p>A One-Stop Solution For All Your Visa Needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                            <div className="section-heading text-center">
                                <h2>Testimonial</h2>
                                <p>A One-Stop Solution For All Your Visa Needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;