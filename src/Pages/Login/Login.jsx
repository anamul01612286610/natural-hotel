import { useContext, useEffect, useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../componentes/SocialLogin/SocialLogin';

const Login = () => {
    const captchaRef = useRef(null);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || "/";
    console.log('stare in the location', location.state)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500

                });
                navigate(from,{replace: true})
            })
    }

    const handlevaliDateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
           
        }

        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex">
                <div className="text-center  md:1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handlevaliDateCaptcha} ref={captchaRef} type="text" placeholder="type the captcha" name="captcha" className="input input-bordered" />

                            <label className="label"></label>

                        </div>

                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p><small>New Here ?? <Link to="/signUp">create and new account</Link> </small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Login;