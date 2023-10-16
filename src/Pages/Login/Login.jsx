import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col w-full">
                <div className="text-center py-3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-2/4 shadow-2xl bg-base-100">
                    <form className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#000080]">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-5 ">Do not have an account? <Link className="font-semibold text-blue-600" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;