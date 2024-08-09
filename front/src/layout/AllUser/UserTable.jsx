import React from 'react';
import DataTable from 'react-data-table-component';
import { FaUserShield, FaTrash,FaUser } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const data = [
    {
        id: 1,
        name: 'Jhon Doe',
        email: 'admin@demo.com',
        permissions: ['super_admin', 'customer', 'store_owner'],
        walletPoints: 0,
        status: 'Active',
        imgUrl: <FaUser size={20} />,
    },
    {
        id: 1,
        name: 'Jhon Doe',
        email: 'admin@demo.com',
        permissions: ['super_admin', 'customer', 'store_owner'],
        walletPoints: 0,
        status: 'Active',
        imgUrl: <FaUser size={20} />,
    },
    {
        id: 1,
        name: 'Jhon Doe',
        email: 'admin@demo.com',
        permissions: ['super_admin', 'customer', 'store_owner'],
        walletPoints: 0,
        status: 'Active',
        imgUrl: <FaUser size={20} />,
    },
    // Add more data rows as needed
];

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        width: '100px',
    },
    {
        name: 'Name',
        selector: row => (
            <div className="flex items-center">
                <div className="inline-flex items-center justify-center flex-shrink-0 border border-gray-300 bg-gray-100 rounded-full w-10 h-10 overflow-hidden">
                    {typeof row.imgUrl === 'string' ? (
                        <img alt={row.name} src={row.imgUrl} className="h-full w-full object-cover" />
                    ) : (
                        row.imgUrl
                    )}
                </div>
                <div className="flex flex-col ml-2">
                    {row.name}
                    <span className="text-sm text-gray-500">{row.email}</span>
                </div>
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Permissions',
        selector: row => (
            <div className="flex flex-wrap gap-2">
                {row.permissions.map(permission => (
                    <span key={permission} className="bg-gray-200 px-2 py-1 rounded">
                        {permission}
                    </span>
                ))}
            </div>
        ),
        sortable: false,
        width: '300px',
    },
    {
        name: 'Available wallet points',
        selector: row => row.walletPoints,
        sortable: true,
        width: '200px',
        center: true,
    },
    {
        name: 'Status',
        selector: row => (
            <span className="inline-block px-3 py-1.5 rounded text-xs font-medium bg-blue-100 text-blue-600">
                {row.status}
            </span>
        ),
        sortable: true,
        width: '150px',
        center: true,
    },
    {
        name: 'Actions',
        cell: row => (
            <div className="flex gap-3">
                <button className="text-blue-500 hover:text-blue-600" title="Assign Or Revoke Admin Permission">
                    <FaUserShield size={20} />
                </button>
                <button className="text-red-500 hover:text-red-600" title="Delete User">
                    <FaTrash size={20} />
                </button>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: '150px',
    },
];

const UserTable = () => {
    return (
        <div className="p-4 overflow-x-auto max-w-[calc(100vw-0px)]">
            <DataTable
                title="User Management"
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                className="rounded-lg shadow-md"
            />
        </div>
    );
};

export default UserTable;
