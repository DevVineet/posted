import React from "react";
import { NavLink as L } from "react-router-dom";
interface Link {
  name: string;
  icon: any;
  path: string;
}

export const Link = ({ name, icon, path = "/" }: Link) => {
  return (
    <L
      to={path}
      className="flex flex-row items-center rounded-md hover:bg-gray-100 p-4"
      activeClassName="bg-gray-100"
      exact
    >
      <img src={icon} alt="" className="w-6 h-6 mr-2" />
      <span>{name}</span>
    </L>
  );
};
