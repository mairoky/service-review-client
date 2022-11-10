import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <section className="features my-5">
            <div className="container">
                <div className="row py-5 bg-white rounded text-center">
                    <div className="col-md-12">
                        <div className="call-out-tittle pt-5">
                            <h2>We are leader in buisness,improve your sales volume</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et dolore.Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="call-out-btn pb-5">
                            <button className='btn btn-dark'>Lets Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;