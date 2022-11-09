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
                        {
                            description.length > 100 ?
                                description.slice(0, 99) + "..."
                                : description
                        }
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p class="fw-semibold">Price: ${price}</p>
                        <p>Raring: {rating}</p>
                    </div>
                    <Link to={`/services/${_id}`}>
                        <Button variant="dark">Read Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ServiceCard;