import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Login With</h1>
      <div className="flex flex-col mt-4 gap-4 ">
        <button className="btn  text-blue-500 rounded-lg btn-outline ">
          <FaGoogle size={24}/>
          Login Width Google
        </button>
        <button className="btn btn-outline  rounded-lg text-gray-800">
          <FaGithub size={24}/> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
