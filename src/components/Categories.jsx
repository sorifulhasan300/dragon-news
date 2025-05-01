import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div className="grid gap-4 font-semibold text-gray-500">
      {categories.map((cat) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn bg-base-300 border-0 hover:bg-base-300  "
              : "btn bg-white border-0 hover:bg-base-300 text-gray-500"
          }
          to={`/category/${cat.id}`}
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
