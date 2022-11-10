import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
    useTitle('Update Review');
    const rev = useLoaderData();
    // console.log(rev);
    const [review, setReview] = useState(rev);

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleUpdateReview = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/reviews/${rev._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Update Successfully.')
                }
            })
    }

    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 m-auto">
                        <div className="card p-3">
                            <form onSubmit={handleUpdateReview}>
                                <div className="form-group mt-2">
                                    <input type="text" className="form-control" defaultValue={rev.service_name} readOnly />
                                </div>
                                <div className="form-group mt-2">
                                    <div className="form-floating">
                                        <textarea
                                            onChange={handleInputChange}
                                            className="form-control"
                                            id="review_txt"
                                            name="review_txt"
                                            style={{ height: 100 }}
                                            defaultValue={rev.review_txt} required />
                                        <label htmlFor="review_txt">Review</label>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-dark mt-3">Update Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditReview;