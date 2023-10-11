import React from 'react'
import { useLocation } from 'react-router-dom'
function ShowProduct() {
    const location = useLocation()
    const products = location.state

    console.log(products)
  return (
    <>
      <div className="container mx-auto mt-8">
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border">Product Name</th>
            <th className="px-4 py-2 bg-gray-200 border">Primary Color</th>
            <th className="px-4 py-2 bg-gray-200 border">Price in India</th>
            <th className="px-4 py-2 bg-gray-200 border">Price Everywhere Else</th>
            <th className="px-4 py-2 bg-gray-200 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=>(


            <tr >
              <td className="px-4 py-2 border">{product.productName}</td>
              <td className="px-4 py-2 border">{product.color.value}</td>
              <td className="px-4 py-2 border">{product.priceInIndia}</td>
              <td className="px-4 py-2 border">{product.priceEverywhereElse}</td>
              <td className="px-4 py-2 border">{product.quantity}</td>
            </tr>

            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ShowProduct