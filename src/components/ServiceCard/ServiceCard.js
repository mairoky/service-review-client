import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { _id, name, image, price, rating, description } = service;
    return (
        <div className="col-lg-4">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p class="fw-semibold">Price: ${price}</p>
                        <p>Raring: {rating}</p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <Button variant="dark">Read Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ServiceCard;