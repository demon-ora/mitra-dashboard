import React from 'react';
import dragon from '../assets/dragon.png';

function Navbar({ toggleSidebar }) {
    return (
        <nav className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-gray-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <img src="/path-to-logo.svg" alt="PickBazar" className="h-8 w-auto" />
            </div>
            <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search your route..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 max-md:hidden"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 max-md:hidden" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-green-500 border border-green-500 px-4 py-2 rounded-md mr-4 text-sm">
                    Visit Site
                </button>
                <div className="flex items-center">
                    <img src={dragon} alt="User" className="h-12 w-8 rounded-full" />
                    <span className="ml-2 text-sm">Jhon Doe</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;