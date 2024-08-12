import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
    const menuSections = [
        {
            title: 'MITRA',
            items: [
                { label: 'Dashboard', icon: '📊', path: '/' },
                { label: 'All users', icon: '👥', path: '/users' },
                { label: 'Admin list', icon: '👑', path: '/admin' },
                { label: 'Customers', icon: '👨‍💼', path: '/customers' },
                { label: 'Products', icon: '📦', path: '/products' },
                { label: 'Categories', icon: '📂', path: '/categories' },
                { label: 'Order List', icon: '📜', path: '/orders' },
                { label: 'Reviews', icon: '📝', path: '/reviews' },
            ]
        },
    ];

    return (
        <aside className={`bg-white w-64 min-h-screen border-r border-gray-200 fixed lg:static transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full lg:translate-x-0 lg:w-20'}`}>
            <nav className="p-4">
                <button 
                    className="absolute top-4 right-4 lg:hidden text-gray-700 hover:text-green-500 transition-colors duration-200"
                    onClick={onClose}
                >
                    <FiX size={24} />
                </button>
                {menuSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6">
                        <h2 className={`text-xl font-semibold text-gray-500 mb-12 text-center lg:text-center`}>
                            {isOpen ? section.title : 'M'}
                        </h2>
                        <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <Link 
                                        to={item.path} 
                                        className="flex items-center text-gray-700 hover:text-green-500 py-2 px-3 rounded transition-colors duration-200"
                                        onClick={onClose}
                                    >
                                        <span className="mr-3 text-lg">{item.icon}</span>
                                        <span className={`text-sm ${isOpen ? 'block' : 'hidden lg:hidden'}`}>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
