import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ServiceCard.css';

const ServiceCard = () => {
    return (
        <div className="col-lg-4">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Service Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p class="fw-semibold">Price: $250</p>
                        <p>Raring: 4.5</p>
                    </div>
                    <Button variant="dark">Read Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ServiceCard;