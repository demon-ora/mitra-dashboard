import React from 'react'
import Summary from './Summary'
import OrderStatus from './OrderStatus'
import RecentOrdersTable from './RecentOrdersTable'
import SaleHistory from './SaleHistory'
import ProductSlider from './ProductSlider'
import juice from '../../assets/juice.webp'
import vegge from '../../assets/VeggiePlatter.webp'

const products = [
  {
    name: "Wonderful Pomegranate Juice, 300 ml",
    description: "Juice is a drink made from the extraction or pressing of the natural...",
    image: juice,
    rating: 5,
    price: 2.40
  },
  {
    name: "Vegge plater",
    description: "Vegge plater is a dish made from the extraction or pressing of the natural...",
    image: vegge,
    rating: 4,
    price: 3.40
  },
]

const Dashboard = () => {

  return (
    <>
    <Summary />
    <OrderStatus />
    <RecentOrdersTable />
    <div style={{display:'flex'}}>
    <SaleHistory />
    <ProductSlider products={products} />
    </div>
    </>
  )
}

export default Dashboard