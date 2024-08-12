import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../src/layout/Layout';
import Dashboard from '../src/layout/Dashboard/Dashboard';
import Alluser from '../src/layout/AllUser/Alluser';
import Admin from '../src/layout/Admin/Admin';
import Product from '../src/layout/Product/Product';
import Categories from '../src/layout/Categories/Categories';
import OrderList from '../src/layout/OrderList/OrderList';
import Review from '../src/layout/Review/Review';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Alluser />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="products" element={<Product />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="orders" element={<OrderList />} />
                    <Route path="reviews" element={<Review />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
