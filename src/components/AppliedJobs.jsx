import React from 'react';
import vector from "../image/Vector.png";
import { useLoaderData } from 'react-router-dom';
import ViewJobs from './ViewJobs';


const AppliedJobs = () => {
    const applyJobData = useLoaderData();
    return (
        <>
        <div className="bg-slate-100">
          <img src={vector} alt="" />
        </div>
        <div className="container mx-auto px-4 flex flex-col gap-8 mt-12">
          {applyJobData.map((job) => (
            <ViewJobs
              applyJobData={applyJobData}
              key={job.id}
              job={job}
            ></ViewJobs>
          ))}
        </div>
      </>
    );
};

export default AppliedJobs;