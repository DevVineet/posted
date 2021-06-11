import React, { FC } from "react";

interface Layout {
  Sidebar: FC;
  Content: FC;
}

export const Layout = ({ Sidebar, Content }: Layout) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-80 border-r border-gray-100 flex flex-row justify-end  flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-grow flex">
        <Content />
      </div>
    </div>
  );
};
