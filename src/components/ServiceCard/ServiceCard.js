import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { _id, name, image, price, rating, description } = service;
    return (
        <PhotoProvider>
            <div className="col-lg-4">
                <Card>
                    <PhotoView src={image}>
                        <Card.Img variant="top" src={image} />
                    </PhotoView>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {
                                description.length > 100 ?
                                    description.slice(0, 99) + "..."
                                    : description
                            }
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <p className="fw-semibold">Price: ${price}</p>
                            <p>Raring: {rating}</p>
                        </div>
                        <Link to={`/services/${_id}`}>
                            <Button variant="dark">Read Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;