import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Service.css';
import { AuthContext } from '../../context/AuthProvider';

const Service = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, image, price, rating, description } = service;

    // Handle Add Review
    const handleAddReview = e => {

    }

    return (
        <div>
            <section className='service-details mt-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className='service-img text-center bg-white py-5 rounded'>
                                <img className='img-fluid rounded' src={image} alt="service name" />
                            </div>
                            <div className='mt-4 p-5 bg-white rounded'>
                                <h3>{name}</h3>
                                <div className=' d-flex justify-content-between '>
                                    <p className='fw-semibold m-0'>Price: ${price}</p>
                                    <p className='m-0'>Rating: {rating}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="service-content bg-white p-3 rounded">
                                <h3>Service Description: </h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='service-review my-5'>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-8 m-auto text-center">
                            {
                                !user?.uid ?
                                    <Link to="/login"><h5 className='m-0'>Please login to add a Review</h5></Link>
                                    : <>
                                        <form onSubmit={handleAddReview}>
                                            <div className="card-body">
                                                <div className="form-group mt-2">
                                                    <FloatingLabel controlId="floatingTextarea2" label="Leave your review here">
                                                        <Form.Control
                                                            as="textarea"
                                                            placeholder="Leave your review here"
                                                            name="review"
                                                            style={{ height: '100px' }}
                                                        />
                                                    </FloatingLabel>
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-dark mt-3">Add Your Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                            }
                        </div>
                    </div>
                    <h2 className='mt-4'>All Users Review</h2>
                    <div className="row g-4 mt-3">
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;