import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

function ViewAndEdit({ formData }) {
  const [localFormData, setLocalFormData] = useState([]);
  const [switchStates, setSwitchStates] = useState({}); // State to track switch on/off states

  useEffect(() => {
    setLocalFormData(formData);

    // Initialize switch states based on formData
    if (formData && formData.colors) {
      const switchStates = formData.colors.reduce((acc, color) => {
        acc[color.id] = color.visible;
        return acc;
      }, {});
      setSwitchStates(switchStates);
    }
  }, [formData]);

  const toggleVisible = (id) => {
    // Update the switch state when the user toggles it
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));

    // Implement your toggleVisible logic here, if needed
  };

  const handlePriceChange = (id, key, value) => {
    // Implement your handlePriceChange logic here
  };

  const handleInputFocus = (event) => {
    event.target.classList.add('border-blue-500');
  };

  const handleInputBlur = (event) => {
    event.target.classList.remove('border-blue-500');
  };

  // Add a conditional check to ensure localFormData is defined
  if (!localFormData || !localFormData.colors) {
    return null; // or handle this condition as needed
  }

  return (
    <div className="container mx-auto mt-8">
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border">Primary Color</th>
            <th className="px-4 py-2 bg-gray-200 border">Price in India</th>
            <th className="px-4 py-2 bg-gray-200 border">Price Everywhere Else</th>
            <th className="px-4 py-2 bg-gray-200 border">Quantity</th>
            <th className="px-4 py-2 bg-gray-200 border">Visible</th>
          </tr>
        </thead>

        <tbody>
          {localFormData.colors.map((color, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{color.label}</td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={color.priceIndia}
                  onChange={(e) => handlePriceChange(color.id, 'priceIndia', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="border-blue-500" // Add the blue border class
                />
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={color.priceElsewhere}
                  onChange={(e) => handlePriceChange(color.id, 'priceElsewhere', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="border-blue-500" // Add the blue border class
                />
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={color.quantity}
                  onChange={(e) => handlePriceChange(color.id, 'quantity', e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="border-blue-500" // Add the blue border class
                />
              </td>
              <td className="px-4 py-2 border">
                <Switch
                  checked={switchStates[color.id]}
                  onChange={() => toggleVisible(color.id)}
                  onColor="#FFA500"
                  offColor="#CCCCCC"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAndEdit;
