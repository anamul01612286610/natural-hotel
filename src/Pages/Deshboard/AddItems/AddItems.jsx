

import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hocks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_iMAGE_hOSTING_KEY;
const image_hosting_api = `https://imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);

        // Image upload to imgdb and then get an URL
      
     const imageFile = {image: data.image[0]}
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
        
    };
    return (
        <div>
            <SectionTitle heading='add an item' subHeading='What,s new?'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label" >
                            <span className="label-text">Recipe Name *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name",{required:true})}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label" >
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register("category",{required:true})}
                                className="select select-bordered w-full ">
                                <option disabled value="default">select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* Price */}
                        <div className="form-control w-full my-6">
                            <label className="label" >
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("Price",{required:true})}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio">
                        </textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register("image" ,{required:true})} type="file"
                            className="file-input w-full max-w-xs"
                        />
                    </div>

                    <button className="btn">
                        add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;
