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
    fetch(`https://toytopia-server-two.vercel.app/category/?category=${data}`)
      .then(response => response.json())
      .then(data => setdata(data))
  };


  useEffect(() => {
    fetch('https://toytopia-server-two.vercel.app/category/?category=Sports Car')
      .then((response) => response.json())
      .then((data) => setdata(data))
  }, []);



  const singleTab = <>
    <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
      {
        data.map(data =>
          <div key={data._id} className="card lg:w-72 md:w-auto bg-base-100 shadow-[0_1px_4px_rgba(0,0,0,0.16)] hover:shadow-[0_3px_8px_rgba(0,0,0,0.20)] transition duration-500 ease-in-out hover:scale-[105%]">
          <figure>
            <img src={data.image} className='h-48 w-full' alt="" />
          </figure>
          <div className="card-body h-36">
            <h2 className="card-title">{data.name}</h2>
            <div className="text-left">
              <p>Price: {data.price}</p>
              <div className="flex mt-2">
                <h1>Rating:</h1>
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
          <div className='mt-1'>
            <Link
              onClick={() => {
                if (user) {
                  window.location.replace(`/all-toys/${data._id}`);
                } else {
                  setTimeout(() => window.location.replace(`/all-toys/${data._id}`), 2000);
                }
              }}
            >
              <button
                className="button mb-2"
                onClick={() => {
                  if (!user) {
                    toast.error('You have to log in.');
                  }
                }}
              >
                View Details
              </button>
            </Link>
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
          <TabList className="flex justify-center gap-5">
            <Tab onClick={() => { tabData('Sports Car') }}
              className=""
              selectedClassName="border-b-2 border-blue-500"
            >
              Sports Cars
            </Tab>
            <Tab onClick={() => { tabData('Supercar') }}
              className=""
              selectedClassName="border-b-2 border-blue-500"
            >
              Super Cars
            </Tab>
            <Tab onClick={() => { tabData('Truck') }}
              className=""
              selectedClassName="border-b-2 border-blue-500"
            >
              Trucks
            </Tab>
          </TabList>
          <TabPanel>
            {singleTab}
          </TabPanel>

          <TabPanel>
            {singleTab}
          </TabPanel>

          <TabPanel>
            {singleTab}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
