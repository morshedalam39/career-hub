import React, { useEffect, useState } from 'react';
import vector from "../image/Vector.png";
import { useLoaderData } from 'react-router-dom';
import ViewJobs from './ViewJobs';


const AppliedJobs = () => {
    const applyJobData = useLoaderData();
    const [filter, setFilter] = useState("");
    const [applied, setApplied] = useState(applyJobData);


    // console.log(applyJobData);

    const handleFilter = ({ currentTarget }) => {
      // console.log(currentTarget.textContent);
      if(currentTarget.textContent == "All"){
        setFilter("")
      }
      else{
        setFilter(currentTarget.textContent);
      }
    };

    useEffect(() => {
      if (filter) {
        const appliedJobs = applyJobData.filter(job => job.work_type == filter)
        
  
      setApplied(appliedJobs);
      }
      else{
        console.log(applyJobData);
        setApplied(applyJobData)

      }
    }, [filter]);
// console.log(applied);
    return (
        <>
        
        <div className="bg-slate-100">
          <img src={vector} alt="" />
        </div>
       


        <div className="container mx-auto px-4 flex flex-col gap-8 mt-12">


        <div className='text-end'>
        <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn btn-active btn-secondary m-1">Filter By</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={(e)=>handleFilter(e)}><a>Onsite</a></li>
    <li onClick={(e)=>handleFilter(e)}><a>Remote</a></li>
    <li onClick={(e)=>handleFilter(e)}><a>All</a></li>
  </ul>
</div>
        </div>


          {applied.map((job) => (
            <ViewJobs
              applyJobData={applied}
              key={job.id}
              job={job}
            ></ViewJobs>
          ))}
        </div>
      </>
    );
};

export default AppliedJobs;