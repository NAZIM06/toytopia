import { useContext, useEffect, useState } from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import { FiDelete } from "react-icons/fi";
import { GrDocumentUpdate } from "react-icons/gr";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert'
import { TbSortAscending } from "react-icons/tb";
import { TbSortDescending } from "react-icons/tb";
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
    DynamicTitle("My Toys");

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [modaldata, setmodaldata] = useState([]);
    const [count, setCount] = useState(true);


    useEffect(() => {
        fetch(`https://toytopia-server-two.vercel.app/my-toys?email=${user?.email}`).then(data => data.json()).then(data => setToys(data))
    }, [count])



    const sortdata = (data) => {

        fetch(`https://toytopia-server-two.vercel.app/my-toys/sort?email=${user?.email}&sorting=${data}`).then(data => data.json()).then(data => setToys(data))

        if (data == 1) { toast.success("Sorted in ascending format") }
        else { toast.success("Sorted in descending format") }

    }

    const deletedata = (data) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((Delete) => {
                if (Delete) {
                    fetch('https://toytopia-server-two.vercel.app/my-toys', {
                        method: "DELETE",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ data })
                    }).then(data => data.json()).then(data => {
                        if (data.deletedCount == 1) {
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
        const fullData = { id, name, price, quantity, rating, description }

        fetch('https://toytopia-server-two.vercel.app/', {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(fullData)
        }).then(data => data.json()).then(data => {
            if (data.modifiedCount == 1) {
                document.getElementById('my-modal-6').click();
                toast.success("Successfully updated.");
                setCount(!count)
                event.target.reset();
            } else {
                toast.info("You didn't change.");
            }
        })
    }


    const search = () => {
        const filter = document.getElementById("input").value.toUpperCase();
        const table = document.getElementById("table");
        const rows = table.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            let found = false;
            const cells = rows[i].getElementsByTagName("td");

            for (let j = 0; j < cells.length; j++) {
                const cellValue = cells[j].textContent || cells[j].innerText;

                if (cellValue.toUpperCase().includes(filter)) {
                    found = true;
                    break;
                }
            }

            rows[i].style.display = found ? "" : "none";
        }
    };



    return (
        <div className='min-h-[100vh]'>
          <div>
          </div>
            <div className="flex justify-center my-8 gap-3">
                <input
                    type="text" id="input" onKeyUp={() => { search() }} placeholder="Search with name"
                    className="border border-gray-800 px-12 py-2 rounded-md  focus:border-blue-500"
                />
            </div>
            <div className="w-full max-w-screen-lg mx-auto mt-12">
                <table className="table w-full" id="table">
                {toys.length == 0 &&
                <div className="p-10 top-28 w-full flex justify-center absolute">
                    <h1 className=" bg-white p-3 rounded-xl font-semibold">You haven't added any Toys.</h1>
                </div>
            }
                    <thead>
                        <tr className="divide-y" style={{ borderBottom: '1px solid black' }}>
                            <th className=""></th>
                            <th className="flex gap-10 items-center">
                                Toy Name
                            </th>
                            <th>Category</th>
                            <th>
                                <div className="flex gap-3 items-center">
                                    <TbSortAscending size={20} className="cursor-pointer" onClick={() => { sortdata(1) }} />
                                    <p>Price</p>
                                    <TbSortDescending size={20} className="cursor-pointer" onClick={() => { sortdata(-1) }} />
                                </div>

                            </th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {
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
                                            <GrDocumentUpdate className="cursor-pointer" size={23} onClick={() => updataData(data)} />

                                            <FiDelete className="cursor-pointer text-red-700" size={30} onClick={() => deletedata(data._id)} />

                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form className="modal-box" onSubmit={(event) => updatevalue(event)}>

                    <div>
                        <label htmlFor="name" className="block mb-2 font-bold">Toy name:</label>
                        <input
                            type="text"
                            defaultValue={modaldata.name}
                            className="w-full px-3 py-2 mb-4 leading-tight border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="name"
                        />

                        <label htmlFor="price" className="block mb-2 font-bold">Price:</label>
                        <input
                            type="number"
                            defaultValue={modaldata.price}
                            className="w-full px-3 py-2 mb-4 leading-tight border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="price"
                        />

                        <label htmlFor="quantity" className="block mb-2 font-bold">Quantity:</label>
                        <input
                            type="number"
                            defaultValue={modaldata.quantity}
                            className="w-full px-3 py-2 mb-4 leading-tight border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="quantity"
                        />

                        <label htmlFor="rating" className="block mb-2 font-bold">Rating:</label>
                        <input
                            type="number"
                            defaultValue={modaldata.rating}
                            className="w-full px-3 py-2 mb-4 leading-tight border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="rating"
                        />

                        <label htmlFor="description" className="block mb-2 font-bold">Description:</label>
                        <input
                            type="text"
                            defaultValue={modaldata?.description}
                            className="w-full px-3 py-2 mb-4 leading-tight border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            id="description"
                        />
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="button">Cancel</label>
                        <button type="submit" className="button">Update</button>
                    </div>

                </form>
            </div>




        </div>
    );
};

export default MyToys;