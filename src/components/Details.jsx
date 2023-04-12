import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendarDay,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Details = ({ detailsData, applyJobButton }) => {
    const {
        id,
        job_description,
        job_responsibility,
        educational_requirements,
        experience,
        salary,
        job_title,
        phone,
        email,
        address,
      } = detailsData;
    return (
        <>
       
        <div className="lg:flex justify-between">
          <div className="lg:w-3/6">
            <p className="text-slate-500">
              <span className="text-xl text-black font-bold">
                Job Description
              </span>{" "}
              : {job_description}
            </p>
            <p className="text-slate-500 my-4">
              <span className="text-xl text-black font-bold">
                Job Responsibility
              </span>{" "}
              : {job_responsibility}{" "}
            </p>
            <p className="text-slate-500 my-4">
              <span className="text-xl text-black font-bold">
                Educational Requirements
              </span>{" "}
              : {educational_requirements}
            </p>
            <p className="text-slate-500">
              <span className="text-xl text-black font-bold">Experience</span> :{" "}
              {experience}
            </p>
          </div>
  
          <div className="bg-slate-200 border-gray-200 rounded lg:w-2/5 p-6 mt-8 lg:mt-0">
            <div>
              <h1 className="text-2xl font-bold mb-4">Job Details</h1>
              <hr
                className="mb-3"
                style={{
                  color: "#9873FF",
                  backgroundColor: "#9873FF",
                  height: "2px",
                }}
              />
              <p>
                <FontAwesomeIcon
                  className="mr-1 text-indigo-500"
                  icon={faDollarSign}
                />{" "}
                <span className="text-lg font-bold"> Salary</span> : {salary}
              </p>
              <p className="mt-2">
                <FontAwesomeIcon
                  className="mr-1 text-indigo-500"
                  icon={faCalendarDay}
                />
                <span className="text-lg font-bold"> Job Title</span> :{" "}
                {job_title}
              </p>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
              <hr
                className="mb-3"
                style={{
                  color: "#9873FF",
                  backgroundColor: "#9873FF",
                  height: "2px",
                }}
              />
              <p>
                <FontAwesomeIcon
                  className="mr-2 text-indigo-500"
                  icon={faPhone}
                />
                <span className="text-lg font-bold">Address</span> : {phone}
              </p>
              <p className="my-2">
                <FontAwesomeIcon
                  className="mr-2 text-indigo-500"
                  icon={faEnvelope}
                />
                <span className="text-lg font-bold">Email</span> : {email}
              </p>
              <p>
                <FontAwesomeIcon
                  className="mr-2 text-indigo-500"
                  icon={faLocationDot}
                />
                <span className="text-lg font-bold">Address</span> : {address}
              </p>
            </div>
            <button
              onClick={() => applyJobButton(id)}
              className="w-full mt-4 border-2 text-xl rounded font-bold p-2btn btn-active btn-secondary"
            >
              Apply Now
            </button>
          </div>
        </div>
      </>
    );
};

export default Details;