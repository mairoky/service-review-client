import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2">
                        <div className="col mb-3">
                            <h5 className='d-flex align-items-center mb-2'>EMIKO</h5>
                            <p>With a focus on customer service, the best visa consultancy firm out there.</p>
                            <p><FaMobileAlt /> +892 05869 525</p>
                        </div>
                        <div className="col mb-3">
                            <h5>Navigation</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Home</Link></li>
                                <li className='nav-item mb-2'><Link>Services</Link></li>
                                <li className='nav-item mb-2'><Link>Faq</Link></li>
                                <li className='nav-item mb-2'><Link>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Services</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Student Visa</Link></li>
                                <li className='nav-item mb-2'><Link>Medical Visa</Link></li>
                                <li className='nav-item mb-2'><Link>Tourist Visa</Link></li>
                                <li className='nav-item mb-2'><Link>Residence Visa</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Help & Support</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Privacy</Link></li>
                                <li className='nav-item mb-2'><Link>Terms & Conditions</Link></li>
                                <li className='nav-item mb-2'><Link>Mail Us</Link></li>
                                <li className='nav-item mb-2'><Link>Faqs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-md-6">
                            <p className='mb-0 text-md-start text-center'>© 2023 EMIKO. All rights reserved. Develop By <Link>RockX Solutions</Link></p>
                        </div>
                        <div className="col-md-6 text-md-end text-center">
                            <ul className="footer-bottom-social">
                                <li><Link><FaFacebookSquare /></Link></li>
                                <li><Link><FaTwitterSquare /></Link></li>
                                <li><Link><FaInstagramSquare /></Link></li>
                                <li><Link><FaLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;