import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddReview = () => {

    // Handle Add Review
    const handleAddReview = e => {

    }

    return (
        <div className='my-4'>
            <Container>
                <Row>
                    <Col md={8} className="m-auto" >
                        <form onSubmit={handleAddReview}>
                            <div className="card-body">
                                <div className="form-group mt-2">
                                    <FloatingLabel controlId="floatingTextarea2" label="Leave your review here">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave your review here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-dark mt-3">Add Review</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddReview;