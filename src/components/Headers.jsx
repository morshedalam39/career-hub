import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Headers = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=''>
           <div className="navbar bg-base-100 ">
  <div className="navbar-start">
       <Link className='font-semibold text-3xl' to="/">WorksHub</Link>
  </div>
  <div className="navbar-center ">
   <div className='flex sm:gap-2 lg:gap-5 text-lg font-medium ' >
   <Link  to="/">Home</Link>
    <Link to="/statistics">Statistics</Link>
    <Link to="/appliedJobs">Applied Jobs</Link>
    <Link to="/blog">Blog</Link>
   </div>
  </div>
  <div className="navbar-end ">
    <button className='btn-primary'>Start Applying</button>
  </div>




  <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>

                <div className="navbar-start">
       <Link className='font-semibold text-3xl' to="/">WorksHub</Link>
  </div>



                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                       <Link  to="/">Home</Link>
                    </li>
                    
                    <li>
                    <Link to="/statistics">Statistics</Link>
                    </li>
                    <li>
                    <Link to="/appliedJobs">Applied Jobs</Link>
                    </li>
                    <li>
                    <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
</div>
          
        </div>
    );
};

export default Headers;