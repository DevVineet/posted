import React, { FC } from "react";
import { NavLink as L } from "react-router-dom";
interface Link {
  name: string;
  Icon: any;
  path: string;
}

export const Link = ({ name, Icon, path = "/" }: Link) => {
  return (
    <L
      to={path}
      className="flex space-x-3 font-medium text-gray-600 hover:font-bold py-4 px-2"
      activeClassName="text-green-500"
      exact
    >
      <Icon className="h-6 w-6" />
      <span className="hidden lg:block">{name}</span>
    </L>
  );
};
