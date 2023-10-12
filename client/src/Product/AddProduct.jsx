// AddProduct.js
import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


function AddProduct() {

  const navigate = useNavigate(); 

  const colorsOptions = [
    'Red', 'Blue', 'Green', 'Yellow', 'Orange',
    'Purple', 'Pink', 'Brown', 'Black', 'White',
    'Gray', 'Cyan', 'Magenta', 'Lime', 'Teal'
  ].map(color => ({ value: color, label: color }));

  const [formData, setFormData] = useState({
    productName: '',
    selectedColors: [], // Store an array of selected colors
  });

  const [errors, setErrors] = useState({});
  const [productList, setProductList] = useState([]); // Store the list of products

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (selectedOptions) => {
    setFormData({
      ...formData,
      selectedColors: selectedOptions,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName) {
      newErrors.productName = 'Product name is required';
    }

    if (formData.selectedColors.length === 0) {
      newErrors.color = 'Select at least one color';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async() => {
    if (validateForm()) {
      // Create an object for each selected color
      const productsForColors = formData.selectedColors.map(colorOption => ({
        productName: formData.productName,
        color: colorOption,
        priceInIndia: 0,
        priceEverywhereElse: 0,
        quantity: 1,
        visible:true
      }));

      // Add the new products to the list
      const productDetails = [...productList, ...productsForColors]
      navigate('/viewAndEdit',{state:productDetails})
    }
  };


  return (
    <>
      <div className="container mx-auto mt-8">
        {/* Render products for selected colors */}

        
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-4 border border-gray-300 rounded shadow">
            <h2 className="text-lg font-semibold">Add Product</h2>
            <div className="mt-4">
              <label htmlFor="productName" className="block">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
              {errors.productName && <p className="text-red-600">{errors.productName}</p>}
            </div>
            <div className="mt-4">
              <label htmlFor="colors" className="block">Colors</label>
              <Select
                name="colors"
                options={colorsOptions}
                isMulti
                value={formData.selectedColors}
                onChange={handleColorChange}
              />
              {errors.color && <p className="text-red-600">{errors.color}</p>}
            </div>
            <div className="mt-4">
              <button className="bg-blue-800 text-white py-2 px-4 rounded" onClick={handleSubmit}>
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
