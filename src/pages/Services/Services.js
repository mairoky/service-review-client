import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <section className="services my-5">
            <div className="container">
                <div className="row g-3">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;