import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Alluser from './AllUser/Alluser';
import Admin from './Admin/Admin';
import Product from './Product/Product';

const Layout = ({ }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    console.log(sidebarOpen);

    return (
        <>
            <div className="flex h-full bg-gray-100">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex-1 flex flex-col ">
                    <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                    {/* <Dashboard /> */}
                    {/* <Alluser /> */}
                    {/* <Admin /> */}
                    <Product />
                </div>
            </div>
        </>
    );
}


export default Layout;
