
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import ShopCatagoryCard from "./ShopCatagoryCard";

const ShopCategory = () => {
  // Assuming you have the array of data
  const data = [
    {
      photo: 'https://example.com/car1.jpg',
      toyName: 'Sports Car 1',
      sellerName: 'John Doe',
      email: 'johndoe@example.com',
      category: 'Sports Car',
      price: '$49.99',
      ratings: 4.5,
      quantity: 10,
      description: 'This is a fantastic sports car toy with great features.',
    },
    {
      photo: 'https://example.com/car2.jpg',
      toyName: 'Truck 1',
      sellerName: 'Jane Smith',
      email: 'janesmith@example.com',
      category: 'Truck',
      price: '$39.99',
      ratings: 4.0,
      quantity: 8,
      description: 'Get ready for an adventurous journey with this amazing truck toy.',
    },
    {
      photo: 'https://example.com/car3.jpg',
      toyName: 'Regular Car 1',
      sellerName: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      category: 'Regular Car',
      price: '$29.99',
      ratings: 3.8,
      quantity: 5,
      description: 'A classic regular car toy for all car enthusiasts out there.',
    },
    // Add more data objects as needed
  ];
  
  
  return (
    <div>
      <p className='font-extrabold text-3xl text-blue-900 text-center my-10'>Toys By Category</p>
      <ShopCatagoryCard data={data} />
    </div>
  );
};

export default ShopCategory;
