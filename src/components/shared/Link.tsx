import React from "react";

interface Link {
  name: string;
  icon: any;
}

export const Link = ({ name, icon }: Link) => {
  return (
    <a
      href=""
      className="flex flex-row items-center rounded-md hover:bg-gray-100 p-4"
    >
      <img src={icon} alt="" className="w-6 h-6 mr-2" />
      <span>{name}</span>
    </a>
  );
};
