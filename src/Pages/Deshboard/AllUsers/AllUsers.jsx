import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hocks/useAxios";
import { AiFillDelete } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
        // ,{
      //   headers:{
      //     authorization:`Bearer ${localStorage.getItem('access-token')}`
      //   }
      // });
      
      return res.data
    }
  })

  const handleDeleteUser = user => {
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
        axiosSecure.delete(`/users/${user._id}`)
          .then((res) => {
            refetch();
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${user.name} is an admin Now!!`,
                icon: "success"
              });
            }
          })

      }
    });
  }
  const handleMakeadmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res)
        if(res.data.modifiedCount >0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }


  return (
    <div>
      <div className="flex justify-evenly ">
        <h2 className="text-3xl">All User</h2>
        <h2 className="text-3xl">Total User: {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Rolf</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <tr className="bg-base-200" key={user._id}>
                  <th>{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
            {  user.role ==`admin`? 'Admin':      <button onClick={() => handleMakeadmin(user)} className="btn btn-info"><FaUser className="text-3xl" /></button>}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)} className="btn btn-error"><AiFillDelete className="text-3xl" /></button>

                  </td>
                </tr>)
              }



            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;