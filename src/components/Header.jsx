import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col mt-10 items-center">
        <img className="w-xl" src="/logo.png" alt="" />
        <p className="text-primary-text">Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE,MMM,YYY")}</p>
      </div>
    </div>
  );
};

export default Header;
