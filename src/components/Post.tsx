import React from "react";

interface Post {
  num: number;
  content: string;
  img?: string;
  author: string;
  date: string;
  keyword?: string;
}

export const Post = ({
  num,
  content,
  img,
  author,
  date,
  keyword = "cars",
}: Post) => (
  <div className="m-2 overflow-hidden border-b border-dashed border-gray-300 dark:border-gray-800 hover: p-2 lg:p-4 dark:text-gray-200">
    <img
      className="w-full bg-gray-200 rounded-xl"
      src={`https://source.unsplash.com/random/600x${400 + num}?${keyword}`}
      alt=""
    />
    <div className="p-1 lg:p-4">
      <p className="text-sm lg:text-md py-2">{content}</p>
      <div className="text-gray-600 dark:text-gray-400 flex text-xs justify-between">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);
