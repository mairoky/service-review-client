import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Q1. Difference between SQL and NoSQL?</h3>
                        <p><span>Ans: </span>The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data.</p>
                        <p>SQL has vertical scalability.And NoSQL is non-vertical scalability.Examples of SQL - Oracle, Microsoft SQL and NoSQL - MongoDB and CouchDB.</p>
                    </div>
                    <div className="col-12">
                        <h3>Q2. What is JWT, and how does it work?</h3>
                        <p><span>Ans: </span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        <p>JWT structure is divided into three parts: header, payload, signature & is separated from each other by dot (.), and will follow the below structure: Header, Payload & Signature.</p>

                    </div>
                    <div className="col-12">
                        <h3>Q3. What is the difference between javascript and NodeJS?</h3>
                        <p><span>Ans: </span>Difference between JavaScript and Node.js, JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</p>
                    </div>
                    <div className="col-12">
                        <h3>Q4. How does NodeJS handle multiple requests at the same time?</h3>
                        <p><span>Ans: </span>NodeJS is a single-threaded platform. This means that it can only process one request at a time. But The event-driven model is very efficient and allows NodeJS to handle thousands of concurrent requests with ease. Node.js uses two concepts, Non-blocking I/O & Asynchronous.</p>
                        <p>Whenever a client sends a request the single thread will send that request to someone else. The current thread will not be busy working with that request. There are workers working for the server. The server sends the request to the worker, the worker further sends it to the other server and waits for the response. In the meantime if there is another request the thread will send it to another worker and the worker will wait for the response from the another server. In this way the single thread will always be available to take the requests from the client. It will not block the requests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;