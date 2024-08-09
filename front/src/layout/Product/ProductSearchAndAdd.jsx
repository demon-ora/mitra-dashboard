import React from 'react';

const ProductSearchAndFilter = () => {
    return (
        <div className="rounded bg-white m-8 p-5 shadow md:p-8 mb-8 flex flex-col">
            <div className="flex w-full flex-col items-center md:flex-row">
                <div className="mb-4 md:mb-0 md:w-1/4">
                    <h2 className="relative text-lg font-semibold text-gray-800 before:absolute before:top-0.5 before:left-[-2rem] before:w-1 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-blue-500 md:before:w-1">
                        Products
                    </h2>
                </div>
                <div className="flex w-full flex-col items-center md:ml-auto md:w-2/4">
                    <form noValidate role="search" className="relative flex w-full items-center">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <button className="absolute top-1/2 transform -translate-y-1/2 p-2 text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="search"
                            name="searchText"
                            className="pl-10 pr-4 h-12 flex items-center w-full rounded-md transition duration-300 ease-in-out text-gray-800 text-sm focus:outline-none border border-gray-300 focus:border-blue-500"
                            placeholder="Search by Name"
                            aria-label="Search"
                            autoComplete="off"
                        />
                    </form>
                </div>
                <button className="mt-5 flex items-center whitespace-nowrap text-base font-semibold text-blue-500 md:mt-0 md:ml-5">
                    Filter
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12" className="ml-2">
                        <path d="M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z" transform="translate(-6.4 -6.4)" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
            <div className="flex w-full transition visible h-auto">
                <div className="mt-5 flex w-full flex-col border-t border-gray-200 pt-5 md:mt-8 md:flex-row md:items-center md:pt-8">
                    <div className="flex w-full flex-col space-y-5 md:flex-row md:items-end md:space-x-5 md:space-y-0">
                        <div className="w-full">
                            <label className="flex text-gray-700 font-semibold text-sm mb-3">Filter By Group</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Filter by Group"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="flex text-gray-700 font-semibold text-sm mb-3">Filter By Category</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Filter by Category"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="flex text-gray-700 font-semibold text-sm mb-3">Filter by Product Type</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Filter by Product Type"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSearchAndFilter;
