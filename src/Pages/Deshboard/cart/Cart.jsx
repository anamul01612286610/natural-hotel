import Swal from "sweetalert2";
import useCart from "../../../hocks/useCart";
import useAxios from "../../../hocks/useAxios";
import { Link } from "react-router-dom";



const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const AxiosDelete = useAxios();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            AxiosDelete.delete(`http://localhost:5000/cart/${id}`)
                    .then((res) => {
                        refetch();
                        if(res.data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
               
            }
        });
    };

    return (
        <div>
            <div className="flex gap-32">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${totalPrice.toLocaleString()}</h2>
            {cart.length ? <Link to="/deshboard/payment"> <button className="btn btn-primary">Pay</button></Link>:
            <button disabled className="btn btn-primary">Pay</button>
            }
            
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className="text-white bg-red-600">
                        <tr>
                            <th>No:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>     
        </div>
        
    );
};

export default Cart;
