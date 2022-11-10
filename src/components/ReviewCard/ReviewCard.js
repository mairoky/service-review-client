import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css';

const ReviewCard = ({ userReview }) => {
    console.log(userReview);
    const { _id, service_id, service_name, review_txt, author_email, author_name, author_image, createdAt, timestamp } = userReview;
    return (
        <div className='col-lg-6 col-md-6 col-12'>
            <div className="review-item bg-white rounded p-3">
                <div className="row">
                    {/* <div className="col-lg-6 col-md-6 col-6">
                        <h3>Best Support</h3>
                    </div> */}
                    <div className="col-12">
                        <div className="stars text-end">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
                <p className='review-txt'>{review_txt}</p>
                <div className="author">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                            <img src={author_image} alt="author" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                            <div className="author-name-des">
                                <p className='m-0'>{author_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;