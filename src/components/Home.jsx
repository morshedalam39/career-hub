import React from 'react';

const Home = () => {
    return (
        <div className='flex '>
            <div className='mx-5'>
                <h1 className='text-5xl font-semibold leading-relaxed'>
                One Step <br /> Closer To Your <br /><span className='text-blue-500'>Dream Job</span>
                </h1>

                <p className='mb-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn-primary'>Get Started</button>
            </div>
            <img className='flex justify-end' src="../../public/cover.png" alt="" srcset="" />
        </div>
    );
};

export default Home;