import React from 'react';
import Banner from './banner';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Features from './Features';




const Home = () => {
    const categoryData = useLoaderData();
    return (
        <>
        <div>
        <Banner></Banner>
        <section className="container mx-auto px-6 lg:px-10">
          <div className="mt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Job Category List
            </h1>
            <p className="text-base text-center mt-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>

            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {categoryData.map((category) => (
                <Category key={category.id} category={category}></Category>
              ))}
            </section>
          </div>
        </section>
        <section className="container mx-auto px-6 lg:px-10">
          <div className="mt-20">
            <Features></Features>
          </div>
        </section>
        </div>
        
    

        </>

    
    );
};

export default Home;