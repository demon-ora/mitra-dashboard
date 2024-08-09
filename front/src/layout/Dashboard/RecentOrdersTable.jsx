import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const data = [
  {
    trackingNumber: '2024207303639',
    customer: 'Customer',
    email: 'customer@demo.com',
    products: 6,
    orderDate: '6 months ago',
    total: '$64.79',
    status: 'Processing'
  },
  {
    trackingNumber: '20231105635099',
    customer: 'Jhon Doe',
    email: 'admin@demo.com',
    products: 2,
    orderDate: '9 months ago',
    total: '$52.24',
    status: 'Processing'
  },
];

const columns = [
  {
    name: 'Tracking Number',
    selector: row => row.trackingNumber,
    sortable: true
  },
  {
    name: 'Customer',
    cell: row => (
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          {row.customer[0]}
        </div>
        <div className="ml-2">
          <div>{row.customer}</div>
          <div className="text-gray-500 text-sm">{row.email}</div>
        </div>
      </div>
    ),
    sortable: true
  },
  {
    name: 'Products',
    selector: row => row.products,
    sortable: true
  },
  {
    name: 'Order Date',
    selector: row => row.orderDate,
    sortable: true
  },
  {
    name: 'Total',
    selector: row => row.total,
    sortable: true
  },
  {
    name: 'Status',
    cell: row => (
      <span className={`px-2 py-1 rounded ${row.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
        {row.status}
      </span>
    ),
    sortable: true
  },
  {
    name: 'Actions',
    cell: () => (
      <button className="text-blue-500 hover:underline">View</button>
    )
  }
];

const RecentOrdersTable = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = event => {
    setSearch(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = data.filter(
      item =>
        item.trackingNumber.toLowerCase().includes(query) ||
        item.customer.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.orderDate.toLowerCase().includes(query) ||
        item.total.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="p-4 m-8 max-sm:m-0 bg-white rounded-lg shadow overflow-x-auto max-w-[calc(100vw-0px)]">
      <h2 className="text-lg font-semibold mt-4 ml-4">Recent Orders</h2>
      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        customStyles={{
          rows: {
            style: {
              minHeight: '72px',
            },
          },
          headCells: {
            style: {
              paddingLeft: '8px',
              paddingRight: '8px',
            },
          },
          cells: {
            style: {
              paddingLeft: '8px',
              paddingRight: '8px',
            },
          },
        }}
      />
    </div>
  );
};

export default RecentOrdersTable;
