import React, { useEffect, useState } from 'react';
import Feature from './Feature';


const Features = () => {
   
    const [features, setFeatures] = useState([]);
    const [featuresData, setFeaturesData] = useState(false);
  
    useEffect(() => {
      fetch("/AllFeatures.json")
        .then((res) => res.json())
        .then((data) => setFeatures(data));
    }, []);
    return (
        <>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Featured Jobs
      </h1>
      <p className="text-base text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {features.slice(0, featuresData ? 6 : 4).map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
         
        ))}
      </div>
      {!featuresData && (
        <span
          className="text-center flex items-center justify-center mt-6"
          onClick={() => setFeaturesData(true)}
        >
          <button className="btn btn-active btn-secondary">See All jobs</button>
        </span>
      )}
      
    </>
    );
};

export default Features;