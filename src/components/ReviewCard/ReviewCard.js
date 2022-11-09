import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css';

const ReviewCard = () => {
    return (
        <div className='col-lg-6 col-md-6 col-12'>
            <div className="review-item bg-white rounded p-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6">
                        <h3>Best Support</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="stars text-end">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Ratione aspernatur soluta nobis distinctio illo omnis! Cumque, repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, blanditiis.</p>
                <div className="author">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                            <img src="img/testimonial/client-1.jpg" alt="author" className="img-fluid img-circle" />
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                            <div className="author-name-des">
                                <p>Lorem Mark</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;