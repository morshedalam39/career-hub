import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendarDay,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ViewJobs = ({ job, applyJobData }) => {
    const {
        image,
        job_title,
        company,
        work_time,
        work_type,
        location,
        salary,
        id,
      } = job;
    return (
        <>
      <div className="container mx-auto px-6 lg:px-10">
       
      </div>
      <div className="rounded shadow-md  border border-gray-200 md:flex items-center justify-center p-10">
        <div className="bg-slate-300 w-[240px] h-[240px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] flex items-center justify-center rounded-md mr-4">
          <img
            className="w-[100px] md:w-[100px] lg:w-[145px]"
            src={image}
            alt=""
          />
        </div>
        <div className="grow">
          <h1 className="text-2xl font-bold mt-4 md:mt-0">{job_title}</h1>
          <h1 className="text-lg font-bold text-slate-500 mt-2 mb-6">
            {company}
          </h1>
          <span className="flex gap-2">
            <p className="border border-blue-400 rounded-md py-1 text-blue-600 px-4 font-bold">
              {work_type}
            </p>
            <p className="border border-blue-400 rounded-md py-1 text-blue-600 px-4 font-bold">
              {work_time}
            </p>
          </span>
          <span className="flex flex-col lg:flex-row gap-4 mt-3 mb-4 text-slate-500">
            <p>
              <FontAwesomeIcon className="mr-1" icon={faLocationDot} />
              {location}
            </p>
            <p>
              <FontAwesomeIcon className="mr-1" icon={faDollarSign} />
              {salary}
            </p>
          </span>
        </div>

        <Link to={`/jobDetails/${id}`}>
          <button className="btn btn-active btn-secondary">View Details</button>
        </Link>
      </div>
    </>
    );
};

export default ViewJobs;