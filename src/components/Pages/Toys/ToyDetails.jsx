import React from 'react';
import { RxCross1} from "react-icons/rx";
import { useLoaderData, useNavigate } from 'react-router-dom';

const ToyDetails = () => {

    const navigate = useNavigate();
    const data = useLoaderData();
    return (
        <div className='h-screen'>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" defaultChecked />
            <div className="fixed z-10 inset-0 flex items-center justify-center">
  <div className="modal-box relative w-full max-w-3xl bg-white rounded-2xl p-8">
  <label onClick={()=>navigate('/all-toys')} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <img
      src={data[0].image}
      className="h-72 w-auto mx-auto rounded-2xl"
      alt="Toy Image"
    />
    <div className="flex flex-col gap-2 mt-5 font-bold">
      <p className="text-xl">Toy Name: {data[0].name}</p>
      <p>Seller Name: {data[0]?.sellerName}</p>
      <p>Seller Email: {data[0]?.sellerEmail}</p>
      <p>Price: {data[0].price}</p>
      <p>Rating: {data[0].rating}</p>
      <p>Available Quantity: {data[0].quantity}</p>
      <p>Description: {data[0]?.description}</p>
    </div>
  </div>
</div>



        </div>
    );
};

export default ToyDetails;