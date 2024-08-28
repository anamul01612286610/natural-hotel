import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../hocks/useAxiosPublic";
import SocialLogin from "../../componentes/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigates = useNavigate();


  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        updateUserProfile(data.name, data.PhotoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log("user added database")
                  reset()
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
               navigates('/')
                }
              })


          })
          .catch(error => console.log(error))
      })


  }

  return (
    <>
      <Helmet>
        <title>Natural hotel || SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo" {...register("PhotoUrl", { required: true })} name="PhotoUrl" className="input input-bordered" required />
                {errors.PhotoUrl && <span className="text-red-600">Photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" required />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="name" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}/

                })} placeholder="password" className="input input-bordered" required />
                {errors.password?.type === 'minLength' && <span className="text-red-600">password must be characters 6</span>}
                {errors.password?.type === 'mxLength' && <span className="text-red-600">password must be characters 20</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600">one upper case , one lower case, one number,should contain at least 8 from the mentioned characters</span>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SingUp" />
              </div>

            </form>
            <p><small>New Here ?? <Link to="/login">create t</Link> </small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;