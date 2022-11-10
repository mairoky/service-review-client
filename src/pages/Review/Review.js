import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReviewRow from '../../components/ReviewRow/ReviewRow';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Review = () => {
    useTitle('Reviews');
    const [reviews, setReviews] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://service-review-server-three.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [user?.email, logOut])

    //Handle Delete Review
    const handleDelete = id => {
        const agree = window.confirm("Are you sure, you want to delete?");
        if (agree) {
            fetch(`https://service-review-server-three.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review Deleted Successfully.')
                        const remain = reviews.filter(r => r._id !== id);
                        setReviews(remain);
                    }
                })
        }

    }
    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-dark table-hover text-center">
                            <tbody>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Review</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    reviews.length === 0 ?
                                        <tr>
                                            <td colSpan={5}><p className="mb-0">No Data Available</p></td>
                                        </tr>
                                        :
                                        reviews.map(review => <ReviewRow
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}
                                        ></ReviewRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;