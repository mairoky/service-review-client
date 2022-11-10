import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import './Home.css';

const Home = () => {
    const services = useLoaderData();

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
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
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
        </main>
    );
};

export default Home;