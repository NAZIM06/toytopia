import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Rating from "react-rating";

const ShopCategory = () => {
  const { user } = useContext(AuthContext)
  const [data, setdata] = useState([]);

  const tabData = (data) => {
    fetch(`http://localhost:5000/category/?category=${data}`)
      .then(response => response.json())
      .then(data => setdata(data))
  };


  useEffect(() => {
    fetch('http://localhost:5000/category/?category=Sports Car')
      .then((response) => response.json())
      .then((data) => setdata(data))
  }, []);



  const tabpaneldata = <>
    <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
      {
        data.map(data =>
          <div key={data._id} className="card lg:w-72 md:w-auto bg-base-100 shadow-[0_1px_4px_rgba(0,0,0,0.16)] 
      hover:shadow-[0_3px_8px_rgba(0,0,0,0.20)] transition duration-500 ease-in-out hover:scale-[105%] ">
            <figure><img src={data.image} className='h-48 w-full' /></figure>
            <div className="card-body h-36">
              <h2 className="card-title">{data.name}</h2>
              <div className="text-left">
                <p>Price : {data.price}</p>
                <div className="flex mt-2">
                  <h1>Rating :</h1>
                  <span className="mt-1 pl-1">
                    <Rating
                      readonly
                      placeholderRating={data.rating}
                      emptySymbol={<AiOutlineStar />}
                      placeholderSymbol={<AiTwotoneStar className="text-[#f81818]" />}
                      fullSymbol={<AiTwotoneStar />}
                    />
                  </span>
                  <span className="pl-2">({data.rating})</span>
                </div>
              </div>
            </div>
            <div className='p-2 mt-3'>
              <Link onClick={() => { (user) ? window.location.replace(`/all-toys/${data._id}`) : setTimeout(() => window.location.replace(`/all-toys/${data._id}`), 2000) }}><button className="button"
                onClick={() => { (user) ? '' : toast.error('You have to log in.') }}>View Details</button></Link>
            </div>
          </div>
        )
      }
    </div>
  </>
  return (
    <div>
      <div className='text-center mx-20 max-[650px]:mx-2 mt-16'>
        <Tabs>
          <TabList className='font-bold flex justify-center gap-5 border-b-2 '>
            <Tab onClick={() => { tabData('Sports Car') }}>Sports Cars</Tab>
            <Tab onClick={() => { tabData('Supercar') }}>Super Cars</Tab>
            <Tab onClick={() => { tabData('Truck') }}>Trucks</Tab>
          </TabList>

          <TabPanel>
            {tabpaneldata}
          </TabPanel>

          <TabPanel>
            {tabpaneldata}
          </TabPanel>

          <TabPanel>
            {tabpaneldata}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
