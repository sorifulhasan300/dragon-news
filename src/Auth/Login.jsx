import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((result) => {
        location.state ? navigate(location?.state) : "/";
      })
      .catch((error) => setError("Login failed"));
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40">
      <div className="card-body">
        <h1 className="text-2xl font-bold text-center mb-4">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          {/* Password */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-center mt-4">
            Dont’t Have An Account ?{" "}
            <Link
              to={"/auth/register"}
              className="text-[#F75B5F] cursor-pointer underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
