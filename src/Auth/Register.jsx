import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 6) {
      setError("Name Should be 6 word");
      return;
    } else {
      setError("name okay");
    }
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => console.log(error.message));
    console.log(name, image, email, password);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-40">
      <div className="card-body">
        <h1 className="text-2xl font-bold text-center mb-4">
          Login your account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* Name field */}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Full Name"
            required
          />
          <p className="text-sm text-red-600">{error}</p>
          {/* Image URL */}
          <label className="label">Image Url</label>
          <input
            name="image"
            type="text"
            className="input"
            placeholder="Image Url"
            required
          />

          {/* Email field */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* Password field */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-center mt-4">
            Dont’t Have An Account ?{" "}
            <Link
              to={"/auth/login"}
              className="text-[#F75B5F] cursor-pointer underline"
            >
              <button type="submit"> Login</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
