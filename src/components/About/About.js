import React from 'react';
import './About.css';
import aboutImg from '../../images/aboutimg.svg';

const About = () => {
    return (
        <section className="about-us my-5">
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-md-12 col-lg-6">
                        <img className='img-fluid' src={aboutImg} alt="about" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <h5 className="">About</h5>
                        <h2 className="">Some Fine<br />Words About Us</h2>
                        <p className="m-0">We are EMIKO, a highly motivated VISA Consultancy Firm, A One-Stop Solution For All
                            Your Visa Needs. All this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teach- ings of the great explorer of the truth, the master-builder of human happiness. No one rejects dislikes or avoids pleasures itself because it is all pleasure but because those who do not know how pursue those who fail their duty through weakness of will, which is the same as saying.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;