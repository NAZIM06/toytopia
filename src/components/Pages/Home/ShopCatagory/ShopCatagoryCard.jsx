import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

const ShopCategoryCard = ({ data }) => {
  console.log(data)
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const filteredData = data.filter((item) => item.category === activeTab);

  return (
    <div  className="flex justify-center font-bold">
      <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab  label="Sports Car" />
        <Tab label="Truck" />
        <Tab label="Regular Car" />
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div className="p-4 border border-gray-300 rounded" key={item.toyName}>
            <img src={item.photo} alt={item.toyName} className="w-full" />
            <h3 className="text-lg font-semibold">fdsgsdfg</h3>
            <p className="text-sm">Seller: {item.sellerName}</p>
            <p className="text-sm">Email: {item.email}</p>
            <p className="text-sm">Price: {item.price}</p>
            <p className="text-sm">Ratings: {item.ratings}</p>
            <p className="text-sm">Quantity: {item.quantity}</p>
            <p className="text-sm">Description: {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategoryCard;
