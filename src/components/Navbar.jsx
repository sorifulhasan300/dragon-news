import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, setUser, loading } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("User Log Out");
        setUser(user);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="blank"></div>
      <h1>{user && user.displayName}</h1>
      <div className="nav-item flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-part flex gap-5">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {user ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <img src="/user.png" alt="" />
            )}
          </div>
        )}
        
        
        {user ? (
          <button
            onClick={handleSignOut}
            to={"/auth/login"}
            className="btn text-white bg-[#403F3F] "
          >
            Log Out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn text-white bg-[#403F3F] ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
