import React from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import { useEffect, useState } from "react"
import { Link} from "react-router-dom";


const AllToys = () => {
    DynamicTitle("All Toys");
    const [ allToys, setAllToys] = useState([]);
    const findInTable = ()=> {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    useEffect(()=>{
        fetch('http://localhost:5000/').then(data => data.json()).then(data => setAllToys(data))
    },[])







    return (
        <div >
        <div>

           

            <div className="overflow-x-auto">

                <table className="table w-full" id="myTable">
                    <thead>
                    <tr className="divide-y">
                        <th className="bg-[#e9f8ff]"></th>
                        <th className="flex gap-10 items-center bg-[#e9f8ff]">
                        <h1 className="text-sm ">Name</h1>

                        <input type="text" id="myInput" onKeyUp={()=> {findInTable()}} placeholder="Search for names.." title="Type in a name"  className="input input-bordered "/>

                        </th>
                        <th className="bg-[#e9f8ff]">Seller</th>
                        <th className="bg-[#e9f8ff]">Category</th>
                        <th className="bg-[#e9f8ff]">Price</th>
                        <th className="bg-[#e9f8ff]">Available Quantity</th>
                        <th className="bg-[#e9f8ff]">Details</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(data => 
                                <tr key={data.id} className="hover border border-black">
                                    <th></th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            </div>
                                            <div>{data.name}</div>
                                        </div>
                                    </td>
                                    <td>{data?.sellerName}</td>
                                    <td>{data.category}</td>
                                    <td>{data.price}</td>
                                    <td className="pl-20">{data.quantity}</td>
                                    <td>
                                    <Link to={`/all-toys/${data._id}`} className="btn">View Details</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>



        <div>

        </div>

        
    </div>
    );
};

export default AllToys;