import React from "react";
import { Link } from "./shared/Link";
import home from "../assets/icons/home.svg";
import explore from "../assets/icons/explore.svg";
import message from "../assets/icons/message.svg";
import user from "../assets/icons/user.svg";

export const Navigation = () => {
  return (
    <div className="space-y-5 font-normal text-md pr-8 text-gray-900">
      <h1 className="text-green-500 text-white text-2xl">Posted</h1>
      <Link icon={home} name="Home" />
      <Link icon={explore} name="Explore" />
      <Link icon={message} name="Messages" />
      <Link icon={user} name="Profile" />
      <Link icon={home} name="Home" />
      <button className="p-3 bg-green-500 text-white rounded-md w-full text-md">
        New post
      </button>
    </div>
  );
};
