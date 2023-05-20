import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from './Shared/DynamicTitle';
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
    DynamicTitle("Add Toy");
    const { user } = useContext(AuthContext)


    const [selectedOption, setSelectedOption] = useState(null);

    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.category = selectedOption?.value;
        data.sellerName = user?.displayName;
        data.sellerEmail = user?.email;
        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(data => data.json()).then(data => {
            toast.success("Toy added.");
            reset();
        })
    };
    const options = [
        { value: 'Sports Car', label: 'Sports Car' },
        { value: 'Supercar', label: 'Supercar' },
        { value: 'Truck', label: 'Truck' },
    ];




    return (
        <div>
            <h1 className="text-center text-3xl text-blue-600 font-bold my-8 ">Add Your Toy</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-auto my-10 w-fit">

                <div className="grid grid-cols-2 gap-5">

                    <input disabled defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full max-w-xs" />
                    <input disabled defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" />
                    <input {...register("name", { required: 'true', maxLength: 20 })} placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
                    <input {...register("image", { required: 'true' })} type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                    <input type="number" {...register("price", { required: 'true', maxLength: 20 })} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    <CreatableSelect defaultValue={selectedOption} placeholder={'Category'} onChange={(data) => setSelectedOption(data)} className="max-w-xs " options={options} />
                    <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="rating (1 - 5) only" className="input input-bordered w-full max-w-xs" />
                    <input type="number" {...register("quantity", { required: 'true' })} placeholder="Available quantity" className="input input-bordered w-full max-w-xs" />

                </div>

                <textarea  {...register("description")} placeholder="Give a short description" className="textarea textarea-bordered block w-full h-[16vh] my-4" ></textarea>
                <button className="btn block w-full bg-[#5140e9] hover:bg-[#1223d6] border-none">Add Toy</button>
            </form>



        </div>
    );
};

export default AddToy;