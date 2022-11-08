import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import './Home.css';

const Home = () => {
    return (
        <main>
            <section className='hero-slider'>
                <div className="container">
                    <HeroSlider />
                </div>
            </section>
        </main>
    );
};

export default Home;