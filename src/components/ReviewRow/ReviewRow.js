import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, review_txt, service_name } = review;
    // console.log(review);
    return (
        <tr>
            <td>{service_name}</td>
            <td>{review_txt}</td>
            <td>
                <Link to={`/edit-review/${_id}`} className='me-3 btn btn-dark'>Edit</Link>
                <button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;

