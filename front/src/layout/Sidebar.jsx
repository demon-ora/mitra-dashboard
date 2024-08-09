import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

function Sidebar({ isOpen, onClose }) {
    const menuSections = [
        {
            title: 'MITRA',
            items: [
                {label:'Dashboard',icon:'📊'},
                { label: 'All users', icon: '👥' },
                { label: 'Admin list', icon: '👑' },
                { label: 'Customers', icon: '👨‍💼' },
                {label:'Products',icon:'📦'},
                {label:'Categories',icon:'📂'},
                {label:'Order List',icon:'📜'},
                {label:'Reviews',icon:'📝'},
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
                        {isOpen ?
                            <h2 className="text-xl font-semibold text-gray-500 mb-12 text-center lg:text-center">{section.title}</h2> :
                            <h2 className="text-xl font-semibold text-gray-500 mb-12 text-center lg:text-center">M</h2>
                        }
                        <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <a href="#" className="flex items-center text-gray-700 hover:text-green-500 py-2 px-3 rounded transition-colors duration-200">
                                        <span className="mr-3 text-lg">{item.icon}</span>
                                        <span className={`text-sm ${isOpen ? 'block' : 'hidden lg:hidden'}`}>{item.label}</span>
                                        {item.hasSubmenu && (
                                            <svg className="ml-auto w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        )}
                                    </a>
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
