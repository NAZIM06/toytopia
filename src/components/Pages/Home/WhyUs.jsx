import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const WhyUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-8 pt-12">
      <div className="text-center">
        <h1 className='text-5xl font-extrabold mb-5 text-blue-900'>Get Your Favorite Toys</h1>
        <p className="text-lg">
          Experience the joy of finding your favorite toys all in one place. Discover a wide selection of toys that cater to every interest and age group. From classic favorites to the latest trends, indulge in a world of endless fun and excitement. Shop now and make playtime unforgettable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5" data-aos="zoom-in">
        <div className=" rounded-lg shadow-md p-4 text-center bg-slate-50">
          <img src="https://static.live.templately.com/woocommerce/2022/12/fa90a862-funzone-iconimg-01.png" alt="Logo" className="mt-2 mx-auto" />
          <h2 className="text-lg text-blue-700 font-bold mb-2">Best Toys Collection</h2>
          <p className="text-gray-500">Discover an exceptional collection of top-quality toys that inspire joy and imagination.</p>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
          <img src="https://static.live.templately.com/woocommerce/2022/12/49612ca7-funzone-iconimg-02.png" alt="Logo" className="mt-2 mx-auto" />
          <h2 className="text-lg text-blue-700 font-bold mb-2">24/7 Customer Support</h2>
          <p className="text-gray-500">Our dedicated customer support team is available around the clock to assist you with any inquiries or concerns.</p>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
          <img src="https://static.live.templately.com/woocommerce/2022/12/fc364e1a-funzone-iconimg-03.png" alt="Logo" className="mt-2 mx-auto" />
          <h2 className="text-lg text-blue-700 font-bold mb-2">Secured Payment</h2>
          <p className="text-gray-500">Experience worry-free shopping with our secure and encrypted payment methods for seamless transactions.</p>
        </div>
        <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
          <img src="https://static.live.templately.com/woocommerce/2022/12/d6bf80b7-funzone-iconimg-04.png" alt="Logo" className="mt-2 mx-auto" />
          <h2 className="text-lg text-blue-700 font-bold mb-2">Fast Delivery</h2>
          <p className="text-gray-500">Enjoy swift and reliable delivery services, ensuring your toys reach you promptly and ready for playtime.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;