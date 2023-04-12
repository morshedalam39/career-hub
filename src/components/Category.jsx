import React from 'react';

const Category = ({ category }) => {
    const { image, job, title } = category;
    return (
        <div className="bg-gray-200 rounded-md p-6">
        <div className="bg-slate-300 w-[70px] h-[70px] flex items-center justify-center rounded-md">
          <img src={image} alt="" />
        </div>
        <h1 className="text-xl font-bold mt-5 mb-2">{title}</h1>
        <p className="text-gray-500">{job}</p>
      </div>
    );
};

export default Category;