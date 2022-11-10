import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const { user } = useContext(AuthContext);
    // Handle Add Service
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const authorEmail = user?.email || "Unregistered";
        const createdAt = new Date();
        const timestamp = Math.floor(new Date().getTime() / 1000);
        // console.log(name, image, price, rating, description, authorEmail, createdAt, timestamp);

        const service = {
            name,
            image,
            price,
            rating,
            description,
            authorEmail,
            createdAt,
            timestamp
        }

        // send data to server & store in the db
        fetch('https://service-review-server-three.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Data Saved Successfully.');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-4'>
            <Container>
                <Row>
                    <Col md={7} className="m-auto">
                        <div className="card">
                            <form onSubmit={handleAddService}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h4>Add Your Service Information</h4>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Service Title</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Student Visa' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="image">Service Image</label>
                                        <input type="text" id="image" name="image" className="form-control" placeholder='https://i.ibb.co/H2xJYHz/visa-4.jpg' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" id="price" name="price" className="form-control" placeholder='560' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="rating">Rating</label>
                                        <input type="text" id="rating" name="rating" className="form-control" placeholder='4.8' required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Description"
                                                id="description"
                                                name="description"
                                                style={{ height: 100 }} required />
                                            <label htmlFor="description">Details of Service</label>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-dark mt-3">Add Service</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AddService;