import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Feature = ({ feature }) => {
    const navigate = useNavigate();
    const {
      id,
      image,
      job_title,
      company,
      work_time,
      work_type,
      job_type,
      location,
      salary,
    } = feature;
    return (
        <div className="border-2 border-gray-200 p-10 shadow-md shadow-slate-200 rounded-md w-full">
      <img src={image} alt="" />
      <h1 className="text-2xl font-bold mt-4 mb-6">{job_title}</h1>
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
      <Link to={`/jobDetails/${id}`}>
        <button className="btn btn-active btn-secondary">View Details</button>
      </Link>
     
    </div>
    );
};

export default Feature;