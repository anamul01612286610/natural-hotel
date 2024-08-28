import Swal from "sweetalert2";
import useAuth from "../../hocks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hocks/useAxios";
import useCart from "../../hocks/useCart";



const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation()
  const axiosSecure = useAxios()
  const [,refetch]= useCart()

  const handleAddToCart = ()=> {
    if (user && user.email) {
      // sent cart item to the database
    
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/cart', cartItem)
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} item is add`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "You are not loggedIn",
        text: " Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login it!"
      }).then((result) => {
        if (result.isConfirmed) {
          //sent 
          navigate("/login", { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <p className="absolute bg-slate-900 text-white mb-4 nt-4 p-4">&{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={ handleAddToCart}
            className="btn btn-outline border-0 border-b-4 bg-slate-300">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;