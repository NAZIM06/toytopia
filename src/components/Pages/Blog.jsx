import React from 'react';
import DynamicTitle from './Shared/DynamicTitle';

const Blog = () => {
    DynamicTitle("Blog");
    return (
        <>
            <div className=" font-serif m-7">

                <h2 className=" text-center text-5xl my-5 font-extrabold text-orange-600 mb-5">Answer of 4 Questions</h2>

                <div className='text-left text-xl'>
                    <h3 className='font-semibold mt-5'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className='text-red-500 mx-4'>An access token is a special code that allows a user to access certain resources or perform actions on a website or application. It's like a temporary key that confirms the user's identity and permissions.
                        A refresh token is a longer-lasting code that can be used to get a new access token when the current one expires. It helps maintain the user's session without requiring them to log in again. <br />

                        To store them on the client-side, they are usually saved in secure storage mechanisms like cookies or local storage. This ensures they are accessible to the application but not exposed to potential attackers.</p>
                    <h3 className='font-semibold mt-5'>2. Compare SQL and NoSQL databases?</h3>
                    <p className='text-red-500 mx-4'>SQL databases are relational databases that organize data into structured tables with predefined schemas, suitable for complex queries and transactions. <br />

                        NoSQL databases are non-relational databases that store data in a more flexible, schema-less format like key-value pairs, documents, or graphs, providing scalability and faster data retrieval for certain use cases.</p>
                    <h3 className='font-semibold mt-5'>3. What is express js? What is Nest JS?</h3>
                    <p className='text-red-500 mx-4'>
                    Express.js is a minimal and flexible web application framework for Node.js, allowing developers to build web applications and APIs easily. <br />

Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications, leveraging TypeScript and decorators for dependency injection and module management.</p>
                    <h3 className='font-semibold mt-5'>4. What is MongoDB aggregate and how does it work?</h3>
                    <p className='text-red-500 mx-4'>MongoDB's aggregate is a method that allows you to perform advanced data processing and analysis operations on the documents within a collection. It provides powerful features like grouping, filtering, sorting, and transforming data, enabling complex data manipulations and aggregations in a single query.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;