import React from 'react';

const OrderListSearchAndAdd = () => {
    return (
        <div className="rounded-lg bg-white m-4 p-5 shadow-md md:p-8 mb-8 flex flex-col items-center md:flex-row">
            <div className="mb-4 md:mb-0 md:w-1/4">
                <h2 className="text-lg font-semibold text-gray-700">
                    OrderList
                </h2>
            </div>
            <div className="flex w-full flex-col items-center space-y-4 md:space-y-0 md:flex-row xl:w-3/4">
                <form className="relative flex w-full items-center" role="search" noValidate>
                    <label htmlFor="search" className="sr-only">Search</label>
                    <button className="absolute top-1/2 left-3 transform -translate-y-1/2 p-2 text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <input
                        type="text"
                        id="search"
                        name="searchText"
                        className="pl-10 pr-4 h-12 flex items-center w-full rounded-md appearance-none transition duration-300 ease-in-out text-gray-700 text-sm focus:outline-none focus:ring-0 border border-gray-300 focus:border-blue-500"
                        placeholder="Search by Name"
                        aria-label="Search"
                        autoComplete="off"
                    />
                </form>
            </div>
        </div>
    );
};

export default OrderListSearchAndAdd;
