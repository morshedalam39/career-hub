import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

import { addToDb } from '../Utilities/fakeDb';

// import vector from "../../image/Vector.png";
import vector from"../image/Vector.png";

const JobDetails = () => {
    const loaderData = useLoaderData();
    const detailsId = useParams();
    const dynamicId = detailsId.id;
    const [detailsData, setDetailsData] = useState({});
    useEffect(() => {
      if (loaderData) {
        const findId = loaderData.find((dataId) => dataId.id === dynamicId);
        setDetailsData(findId);
      }
    }, []);
    
  
    const applyJobButton = (id) => {
      
      addToDb(id);
     
    };
    return (
        <>
      <div className="bg-slate-100">
        <img src={vector} alt="" />
      </div>

      <div className="container px-10 mx-auto mt-10 rounded-md">
        <Details
          applyJobButton={applyJobButton}
          detailsData={detailsData}
        ></Details>
      </div>
    </>
    );
};

export default JobDetails;