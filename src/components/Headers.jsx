import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const Headers = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
      <header>
      <nav className="bg-slate-100">
        <div className="flex justify-between container mx-auto py-8 px-6 lg:px-10 items-center relative">
          <h1 className="text-3xl font-bold">
            Jobs<span className="text-pink-900">Hub</span>{" "}
          </h1>

          {/* NavLink create */}
          <ul className="hidden lg:flex gap-10 text-lg font-bold">
            <li>
              <Link to="/">Home</Link>
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

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <Bars3Icon className="w-8"></Bars3Icon>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold">
                        Jobs<span className="text-pink-900">Hub</span>{" "}
                      </h1>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-8 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <nav>
                    <ul className=" lg:flex gap-10 text-lg font-bold leading-10">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/statistics">Statistics</Link>
                      </li>
                      <li>
                        <Link to="/job">Applied Jobs</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <button className="mt-4 btn btn-active btn-secondary">
                          Start Applying
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>

          {/* Apply button */}

          <button className="hidden lg:block btn btn-active btn-secondary">
            Start Applying
          </button>
        </div>
        {/* Banner part design */}
      </nav>
    </header>
    );
};

export default Headers;