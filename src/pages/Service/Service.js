import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css';

const Service = () => {
    const service = useLoaderData();
    const { _id, name, image, price, rating, description } = service;

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
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h2>Users Review</h2>
                                <Link><button className='btn btn-outline-dark'>Add Your Review</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;