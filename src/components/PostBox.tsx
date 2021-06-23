import React from "react";

export const PostBox = () => {
  return (
    <div
      tabIndex={1}
      className="m-4 mb-0 border dark:border-gray-900 overflow-hidden relative bg-white dark:bg-gray-800 focus:shadow-lg rounded-md"
    >
      <textarea
        placeholder="What's happening?"
        className="resize-none text-lg p-4 w-full h-30 box-border dark:bg-gray-800"
      ></textarea>
      <button className="py-2 px-4 bg-green-500 text-white rounded-md absolute bottom-2 right-2 text-sm">
        Post
      </button>
    </div>
  );
};
