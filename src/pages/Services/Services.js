import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Services.css';

const Services = () => {
    useTitle('Services');
    const services = useLoaderData();
    const { loading, setLoading } = useContext(AuthContext);
    // console.log(services);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    })
    return (
        <>
            {
                loading === true ?
                    <Loader />
                    :
                    <>
                        <section className="services my-3">
                            <div className="container">
                                <div className="row g-3">
                                    {
                                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                                    }
                                </div>
                            </div>
                        </section>
                    </>
            }
        </>

    );
};

export default Services;