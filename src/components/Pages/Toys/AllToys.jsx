import DynamicTitle from '../Shared/DynamicTitle';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const AllToys = () => {
    DynamicTitle("All Toys");
    const [allToys, setAllToys] = useState([]);

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



    useEffect(() => {
        fetch('https://toytopia-server-two.vercel.app/')
            .then(response => response.json())
            .then(data => setAllToys(data));
    }, []);

    return (
        <div >
            <div className="flex justify-center my-8 gap-3">
                <input
                    type="text" id="input" onKeyUp={() => { search() }} placeholder="Search with name"
                    className="border border-gray-800 px-12 py-2 rounded-md  focus:border-blue-500"
                />
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full" id="table">
                        <thead>
                            <tr className="divide-y">
                                <th></th>
                                <th className="flex gap-10 items-center ">
                                    <h1 className="text-sm ">Car Name</h1>
                                </th>
                                <th>Seller</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allToys.map(data =>
                                    <tr key={data._id} className="hover border ">
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
                                            <Link to={`/all-toys/${data._id}`} className="button">View Details</Link>
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