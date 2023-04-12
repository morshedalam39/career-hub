import React from 'react';

const Banner = () => {
    return (
        <section className="bg-slate-100">
        <div className="container mx-auto px-6 lg:px-8 py-10 lg:flex lg:items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              One Step <br></br> Closer To Your<br></br>{" "}
              <span className="text-pink-900">Dream Job</span>
            </h1>
            <p className="text-gray-500 my-6 text-lg lg:w-3/5">
              Explore thousands of job opportunities with all the information you
              need. Its your future. Come find it. Manage all your job application
              from start to finish.
            </p>
            <button className="btn btn-active btn-secondary">Get Started</button>
          </div>
          <div>
            <img src="cover.png" alt=""  />
          </div>
        </div>
      </section>
    );
};

export default Banner;