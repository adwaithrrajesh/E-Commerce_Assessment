import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Switch from 'react-switch';
import { useNavigate } from 'react-router-dom';

function ViewAndEdit() {
  const location = useLocation();
  const productDetails = location.state;
  const navigate = useNavigate()

  const [editedProductDetails, setEditedProductDetails] = useState(productDetails);

  // Define state for errors
  const [errors, setErrors] = useState([]);

  const handleFieldChange = (index, field, value) => {
    const updatedDetails = [...editedProductDetails];
    updatedDetails[index][field] = value;

    // Add validation logic here and set errors if validation fails
    const fieldErrors = {};
    
    // Check if the field is empty
    if (value.trim() === '') {
      fieldErrors[field] = 'This field cannot be empty.';
    }

    // For price and quantity, validate if it's a valid positive number
    if (field === 'priceInIndia' || field === 'priceEverywhereElse' || field === 'quantity') {
      if (isNaN(value) || parseFloat(value) < 0) {
        fieldErrors[field] = 'Please enter a valid positive number.';
      }
    }

    // Update the errors state
    const updatedErrors = [...errors];
    updatedErrors[index] = { ...updatedErrors[index], ...fieldErrors };
    setErrors(updatedErrors);

    setEditedProductDetails(updatedDetails);
  };

  const handleVisibleChange = (index) => {
    const updatedDetails = [...editedProductDetails];
    updatedDetails[index].visible = !updatedDetails[index].visible;
    setEditedProductDetails(updatedDetails);
  };

  const showProducts = () => {
    const visibleProducts = editedProductDetails.filter((product) => product.visible);
    navigate('/showProduct', { state: visibleProducts });
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border">Product Name</th>
            <th className="px-4 py-2 bg-gray-200 border">Primary Color</th>
            <th className="px-4 py-2 bg-gray-200 border">Price in India</th>
            <th className="px-4 py-2 bg-gray-200 border">Price Everywhere Else</th>
            <th className="px-4 py-2 bg-gray-200 border">Quantity</th>
            <th className="px-4 py-2 bg-gray-200 border">Visible</th>
          </tr>
        </thead>
        <tbody>
          {editedProductDetails.map((product, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{product.productName}</td>
              <td className="px-4 py-2 border">{product.color.label}</td>
              <td className="px-4 py-2 border">
                <input
                  type="number"
                  value={product.priceInIndia}
                  onChange={(e) => handleFieldChange(index, 'priceInIndia', e.target.value)}
                  className="border border-blue-500 px-2 py-1"
                />
                {errors[index] && errors[index].priceInIndia && (
                  <span className="text-red-500">{errors[index].priceInIndia}</span>
                )}
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="number"
                  value={product.priceEverywhereElse}
                  onChange={(e) => handleFieldChange(index, 'priceEverywhereElse', e.target.value)}
                  className="border border-blue-500 px-2 py-1"
                />
                {errors[index] && errors[index].priceEverywhereElse && (
                  <span className="text-red-500">{errors[index].priceEverywhereElse}</span>
                )}
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleFieldChange(index, 'quantity', e.target.value)}
                  className="border border-blue-500 px-2 py-1"
                />
                {errors[index] && errors[index].quantity && (
                  <span className="text-red-500">{errors[index].quantity}</span>
                )}
              </td>
              <td className="px-4 py-2 border">
                <Switch
                  checked={product.visible}
                  onChange={() => handleVisibleChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="bg-blue-800 text-white py-2 px-4 rounded" onClick={showProducts}>
          Save And Proceed
        </button>
      </div>
    </div>
  );
}

export default ViewAndEdit;
