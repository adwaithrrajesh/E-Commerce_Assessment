import React, { useState } from 'react';
import Select from 'react-select';
import ViewAndEdit from './viewAndEdit';

function AddProduct() {
  const colorsOptions = [
    'Red', 'Blue', 'Green', 'Yellow', 'Orange',
    'Purple', 'Pink', 'Brown', 'Black', 'White',
    'Gray', 'Cyan', 'Magenta', 'Lime', 'Teal'
  ].map(color => ({ value: color, label: color }));

  const [formData, setFormData] = useState({
    productName: '',
    color: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const [sendToView,setSendToView] = useState(false)

  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName) {
      newErrors.productName = 'Product name is required';
    }

    if (formData.colors.length === 0) {
      newErrors.colors = 'Select at least one color';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSendToView(formData)
    }
  };

  return (
<>


<div className="container mx-auto mt-8">

  {sendToView &&<ViewAndEdit formData={sendToView} /> }

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
              value={formData.colors}
              onChange={(selectedOptions) => handleInputChange("colors", selectedOptions)}
            />
            {errors.colors && <p className="text-red-600">{errors.colors}</p>}
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
