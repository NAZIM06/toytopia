import React, { useContext, useEffect, useState } from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import { MdDeleteSweep } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert'
import { TbSortAscending } from "react-icons/tb";
import { TbSortDescending } from "react-icons/tb";
import { AuthContext } from '../../../Provider/AuthProvider';



const MyToys = () => {
    DynamicTitle("My Toys");

    const {user} = useContext(AuthContext);
    const [ toys, setToys ] = useState([]);
    const [modaldata , setmodaldata ] = useState([]);
    const [ count , setCount ] = useState(true);


    useEffect(()=>{
            fetch(`http://localhost:5000/my-toys?email=${user?.email}`).then(data => data.json()).then(data => setToys(data))
    },[count])



    const sortdata = (data) => {

        fetch(`http://localhost:5000/my-toys/sort?email=${user?.email}&sorting=${data}`).then(data => data.json()).then(data => setToys(data))

        if(data==1){toast.success("Sorted in ascending format")}
        else{toast.success("Sorted in descending format")}
       
    }

    const deletedata = (data) => {
    swal({
        title: "Are you sure you?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {            
            fetch('http://localhost:5000/my-toys' , {
                method : "DELETE" , 
                headers : { 'content-type' : 'application/json'} ,
                body : JSON.stringify({data})
            }).then(data => data.json()).then(data => {
                if(data.deletedCount==1){
                    swal("The data was deleted", {
                        icon: "success",            
                    });
                    setCount(!count)
                }
            })
        }
        });
    }


    const updataData = (data) => {
        setmodaldata(data)
        document.getElementById('my-modal-6').click();
    }

    const updatevalue = (event) => {
        event.preventDefault();

        const id = modaldata._id;
        const name = event.target.name.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const rating = parseInt(event.target.rating.value);
        const description = event.target.description.value;
        const totaldata = {id,name,price,quantity,rating,description}

        fetch('http://localhost:5000/' , {
            method :'PUT' ,
            headers : {'Content-type' : 'application/json'} ,
            body : JSON.stringify(totaldata)
        }).then(data => data.json()).then(data =>{
            if(data.modifiedCount == 1){
                document.getElementById('my-modal-6').click();
                toast.success("Successfully updated.");
                setCount(!count)
                event.target.reset();
            }else{
                toast.info("You haven't changed anything.");
            }
        })
    }


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


    return (
        <div className="h-[90vh]">

            <div className="overflow-x-auto">

                <table className="table w-full" id="myTable">
                    <thead>
                        <tr className="divide-y" style={{borderBottom:'1px solid black'}}>
                            <th className="bg-[#e9f8ff]"></th>
                            <th className="flex gap-10 items-center bg-[#e9f8ff]">
                            <h1 className="text-sm">Name</h1>

                            <input type="text" id="myInput" onKeyUp={()=> {findInTable()}} placeholder="Search for names.." title="Type in a name"  className="input input-bordered"/>

                            </th>
                            <th className="bg-[#e9f8ff]">Category</th>
                            <th className="bg-[#e9f8ff]">

                                <div className="flex gap-3 items-center">
                                <TbSortAscending size={20} className="cursor-pointer" onClick={()=> {sortdata(1)}}/>
                                <p>Price</p>
                                <TbSortDescending size={20} className="cursor-pointer" onClick={()=> {sortdata(-1)}}/>
                                </div>
                               
                                </th>
                            <th className="bg-[#e9f8ff]">Available Quantity</th>
                            <th className="bg-[#e9f8ff]">Rating</th>
                            <th className="bg-[#e9f8ff]"></th>
                            <th className="bg-[#e9f8ff] "></th>
                        </tr>
                    </thead>

                    <tbody>

                        {toys.length!=0?
                            toys.map(data => 
                                <tr key={data._id} className="hover ">
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
                                    <td>{data.category}</td>
                                    <td className="pl-[59px]">{data.price}</td>
                                    <td className="pl-[59px]">{data.quantity}</td>
                                    <td className="pl-[40px]">{data.rating}</td>

                                    <td></td>
                                    <td>
                                        <div className="flex items-center gap-10">
                                        <GrDocumentUpdate className="cursor-pointer" size={23} onClick={()=>updataData(data)}/>

                                        <MdDeleteSweep className="cursor-pointer" size={30} onClick={()=>deletedata(data._id)}/>

                                        </div>
                                    </td>
                                </tr>
                            ) : <tr><td><h1 className="flex justify-center">You Havent added any toys.</h1></td></tr>
                        }
                    </tbody>
                </table>
            </div>


            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form className="modal-box" onSubmit={(event)=>updatevalue(event)}>

                    <div>
                
                        <label htmlFor="">Toy name : </label>
                        <input type="text" defaultValue={modaldata.name} className="ml-4 mb-2 input input-bordered w-full max-w-xs" id="name" />  
                        <br />
                        <label htmlFor="">Price : </label>
                        <input type="number" defaultValue={modaldata.price} className="ml-12 mb-2 input input-bordered w-full max-w-xs" id="price" />   
                        <br />
                        <label htmlFor="">Quantity : </label>
                        <input type="number" defaultValue={modaldata.quantity} className="ml-5 mb-2 input input-bordered w-full max-w-xs" id="quantity" />  
                        <br />
                        <label htmlFor="">Rating : </label>
                        <input type="number" defaultValue={modaldata.rating} className="ml-9 mb-2 input input-bordered w-full max-w-xs" id="rating" />   
                        <br />
                        <label htmlFor="">Description : </label>
                        <input type="text" defaultValue={modaldata?.description} className="input mb-2 input-bordered w-full max-w-xs" id="description" />   

                    </div>


                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn bg-[#808bfe] hover:bg-[#666fcb] border-none">Cancel</label>
                        <button type="submit" className="btn bg-[#808bfe] hover:bg-[#666fcb] border-none">Update</button> 
                    </div>

                </form>
            </div>




        </div>
    );
};

export default MyToys;